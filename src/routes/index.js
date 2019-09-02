import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/not-found";
import Profile from "../pages/profile";
import Repositories from "../pages/repositories";
import SearchRepos from "../pages/search-repos";

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route path="/login" component={Login} />
    <PrivateRoute path="/home" component={Home} />
    <PrivateRoute path="/profile" component={Profile} />
    <PrivateRoute path="/repos" component={Repositories} />
    <PrivateRoute path="/search" component={SearchRepos} />
    
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
