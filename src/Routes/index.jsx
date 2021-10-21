import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router";
import Goals from "../Pages/Goals";
import Groups from "../Pages/Groups";
import Home from "../Pages/Home";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Member from "../Pages/Member";
import Register from "../Pages/Register";
import SpecificGroup from "../Pages/SpecificGroup";
import { LoginContext } from "../Providers/Login";

function Routes() {
  const { authenticated, setAuthenticated } = useContext(LoginContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehabits:User"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage authenticated={authenticated} />
        </Route>
        <Route exact path="/home">
          <div>
            <Home authenticated={authenticated} />
          </div>
        </Route>
        <Route exact path="/login">
          <Login authenticated={authenticated} />
        </Route>
        <Route exact path="/register">
          <Register authenticated={authenticated} />
        </Route>
        <Route exact path="/groups">
          <Groups authenticated={authenticated} />
        </Route>
        <Route exact path="/activites">
          <SpecificGroup authenticated={authenticated} />
        </Route>
        <Route exact path="/member">
          <Member authenticated={authenticated} />
        </Route>
        <Route exact path="/goals">
          <Goals authenticated={authenticated} />
        </Route>
        <Route exact path="/logout">
          <Logout authenticated={authenticated} />
        </Route>
      </Switch>
    </>
  );
}
export default Routes;
