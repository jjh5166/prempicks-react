import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from '../components/forms/Login';
import SignUp from '../components/forms/SignUp';
import MyPicks from '../pages/MyPicks';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/mypicks" exact component={MyPicks} />
    </Switch>
  </Router>
);