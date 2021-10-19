import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Teste from "../Pages/LandingPage/teste/teste";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route exact path = "/teste">
        <Teste/>
      </Route>
    </Switch>
  );
}

export default Routes;
