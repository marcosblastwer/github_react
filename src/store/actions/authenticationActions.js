import { push } from "connected-react-router";

import * as types from "../actions/actionTypes";
import authenticationService from "../../services/authenticationService";

export const login = (user, from) => dispatch => {
  dispatch({
    type: types.AUTH_LOGIN,
    user
  });

  dispatch(push(from));
};


export const logout = () => dispatch => {
  authenticationService.logout();
  dispatch({
    type: types.AUTH_LOGOUT
  });
  dispatch(push("/login"));
}

export const updateCredentials = (user, from) => dispatch => {
  user ? dispatch(login(user, from)) : dispatch(logout);
}