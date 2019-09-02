async function userRepositories(login) {
  return fetch(`https://api.github.com/users/${login}/repos`)
    .then(response => response.json())
    .then(response => response ? response : []);
}

async function searchPublic(value) {
  return fetch(`https://api.github.com/search/repositories?q=${value}&sort=stars&order=desc`)
    .then(response => response.json())
    .then(response => {
      return response && response.items ? response.items : [];
    });
}

const repositoryService = {
  searchPublic,
  userRepositories
}

export default repositoryService;
