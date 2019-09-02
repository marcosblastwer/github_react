import React from "react";
import { Route, Redirect } from "react-router-dom";

import authenticationService from "../services/authenticationService";

// Criei o component PrivateRoute para lidar com as rotas com restrição de acesso
// Está no modelo default sugerido pela documentação do react-router-dom
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}

    render={props => {
      const user = authenticationService.currentUserValue;
      if (user) {
        return <Component {...props} />;
      }
      return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
    }}
  />
);

export default PrivateRoute;
