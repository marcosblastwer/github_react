import React, { Fragment } from "react";

import Repository from "./repository";

// Tentei maximizar a composição dos componentes, reutilizar sempre que possível
// Este componente é um exemplo, as três principais páginas da aplicação o utiliza

const RepositoryList = ({ repos }) => (
  <Fragment>
    {repos && repos.map(repo => <Repository key={repo.id} repo={repo} />)}
  </Fragment>
);

export default RepositoryList;
