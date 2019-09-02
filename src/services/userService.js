async function getFollowers(login) {
  return fetch(`https://api.github.com/users/${login}/followers`)
    .then(response => response.json())
    .then(response => response ? response : []);
}

async function getFollowing(login) {
  return fetch(`https://api.github.com/users/${login}/following`)
    .then(response => response.json())
    .then(response => response ? response : []);
}

const userService = {
  getFollowers,
  getFollowing
}

export default userService;
