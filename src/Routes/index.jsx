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

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <div>
            <Home />
          </div>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/groups">
          <Groups />
        </Route>
        <Route exact path="/activites">
          <SpecificGroup />
        </Route>
        <Route exact path="/member">
          <Member />
        </Route>
        <Route exact path="/goals">
          <Goals />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
      </Switch>
    </>
  );
}
export default Routes;
