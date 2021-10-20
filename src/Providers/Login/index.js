import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router";
import { useContext } from "react/cjs/react.development";
import { HabitsContext } from "../Habits";

export const LoginContext = createContext([]);

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState();
  const history = useHistory();
  const [aux, setAux] = useState();

  const getLogin = (e) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", e)
      .then((Response) =>
        localStorage.setItem(
          "@Kenziehabits:token",
          JSON.stringify(Response.data.access)
        )
      )
      .then((_) =>
        setLogin(
          jwtDecode(JSON.parse(localStorage.getItem("@Kenziehabits:token")))
        )
      );
  };

  useEffect(() => {
    if (login) {
      axios
        .get(`https://kenzie-habits.herokuapp.com/users/${login.user_id}/`)
        .then((Response) => setAux(Response.data));
    }
  }, [login]);

  if (aux) {
    localStorage.setItem("@Kenziehabits:User", JSON.stringify(aux));

    history.push("/home");
  }
  return (
    <LoginContext.Provider value={{ login, getLogin, aux }}>
      {children}
    </LoginContext.Provider>
  );
};
