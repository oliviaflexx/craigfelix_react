import React from "react";
// react router
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Travel from "./Travel";
import Commercial from "./Commercial";
import Aerials from "./Aerials";
import About from "./About";
import Error from "./Error";

import Navbar from "./Navbar";

const ReactRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/travel">
          <Travel />
        </Route>
        <Route path="/commercial">
          <Commercial />
        </Route>
        <Route path="/aerials">
          <Aerials />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouter;