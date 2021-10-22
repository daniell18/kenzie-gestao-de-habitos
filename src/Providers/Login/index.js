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
  const [updateLogin, setUpdateLogin] = useState(false);
  const getLogin = (e) => {
    setUpdateLogin(e)
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", e)
      .then((Response) => {
        localStorage.setItem(
          "@Kenziehabits:token",
          JSON.stringify(Response.data.access)
        );
        setAuthenticated(true);
      })
      .then((_) =>
        setLogin(
          jwtDecode(JSON.parse(localStorage.getItem("@Kenziehabits:token")))
        )
      );
  };
  useEffect(() => {
    console.log("estou aqui");
    if (login) {
      axios
        .get(`https://kenzie-habits.herokuapp.com/users/${login.user_id}/`)
        .then((Response) => setAux(Response.data));
      let token = JSON.parse(localStorage.getItem("@Kenziehabits:token"));
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
      value={{ login, getLogin, aux, setAuthenticated, authenticated, updateLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
};