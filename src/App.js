import React from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import history from "./routes/history";
import store from "./store";

import Header from "./components/header";
import PageContainer from "./components/page-container";
import Routes from "./routes";
import Wrapper from "./components/wrapper";

// Utilizei ConnectedRouter do connect-react-router no lugar do BrowserRouter do react-router-dom
// para integrar o router ao redux e facilitar disparo de rotas, e para disponibilizar o history
// do navegador

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Wrapper>
        <Header />
        <PageContainer>
          <Routes />
        </PageContainer>
      </Wrapper>
    </ConnectedRouter>
  </Provider>  
);

export default App;
