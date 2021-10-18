import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default Routes;
