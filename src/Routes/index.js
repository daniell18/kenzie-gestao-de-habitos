import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../Pages/Register";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
    </Switch>
  );
}

export default Routes;
