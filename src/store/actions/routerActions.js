import { push } from "connected-react-router";

// Criei esta action para ajudar em transições entre as rotas principalmente 
// quando é necessário mudar de rota sem que o usuário tenha clicado em um link
// É possível ver seu uso em ./src/pages/profiles/index.js

export const redirect = (to) => dispatch => {
  dispatch(push(to));
}