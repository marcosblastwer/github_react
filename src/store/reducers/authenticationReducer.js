import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
  user: null
};

export default function authenticationReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.AUTH_LOGIN:
      return { user: action.user };

    case types.AUTH_LOGOUT:
      return INITIAL_STATE;
    
    default:
      return state;
  }
};
