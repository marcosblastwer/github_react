import { BehaviorSubject } from "rxjs";

import handleResponse from "../helpers/responseHandler";

const currentUserSubject = 
  new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

function login(username, password, stayConnected) {
  const encoded = btoa(`${username}:${password}`);
  
  const requestOptions = {
    method: "POST",
    headers: {
      "Authorization": `Basic ${encoded}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ username, password })
  };
  
  return fetch("https://api.github.com/user", requestOptions)
    .then(handleResponse)
    .then(user => {
      if (stayConnected) {
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
      currentUserSubject.next(user);

      return user;
    });
}

function logout() {
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}

const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() { return currentUserSubject.value }
};

export default authenticationService;
