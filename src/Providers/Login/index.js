import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router";
export const LoginContext = createContext([]);
export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState();
  const history = useHistory();
  const [aux, setAux] = useState();
  const [subscription, setSubscription] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const getLogin = (e) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", e)
      .then((Response) => {
        localStorage.setItem(
          "@Kenziehabits:token",
          JSON.stringify(Response.data.access)
        );
       
      })
      .then((_) =>
        setLogin(
          jwtDecode(JSON.parse(localStorage.getItem("@Kenziehabits:token")))
        )
      );
  };
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("@Kenziehabits:token"));
    if (login) {
      axios.get("https://kenzie-habits.herokuapp.com/habits/personal/",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response)=>localStorage.setItem("@Kenziehabits:Habits",JSON.stringify(response.data))).then((_)=>setAuthenticated(true))
      axios
        .get(`https://kenzie-habits.herokuapp.com/users/${login.user_id}/`)
        .then((Response) => setAux(Response.data));
      axios
        .get(`https://kenzie-habits.herokuapp.com/groups/subscriptions/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setSubscription(response.data);
        });
    }
  }, [login]);
  if (aux && subscription) {
    localStorage.setItem("@Kenziehabits:User", JSON.stringify(aux));
    localStorage.setItem(
      "@Kenziehabits:SubscriptionGroup",
      JSON.stringify(subscription)
    );
    history.push("/home");
  }
  return (
    <LoginContext.Provider
      value={{
       
        getLogin,
        
        setAuthenticated,
        authenticated,
       
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
