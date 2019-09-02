import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router"; 

import authenticationReducer from "./authenticationReducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  authentication: authenticationReducer
});
