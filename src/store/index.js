import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../routes/history";
import createRootReducer from "./reducers";

// Incluí o history e thunk como middlewares para ajudar na navegação
// o redux-thunk ajudou a lidar com os "side effects" do disparo de actions simples do redux
// me permitiu disparar múltiplas actions de um único ponto
// Dá para notar o uso desse middleware na action ./src/store/actions/authenticationActions.js

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  createRootReducer(history),
  applyMiddleware(...middlewares)
);

export default store;
