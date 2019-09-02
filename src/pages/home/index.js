import React, { Component } from "react";

import "./styles.css";

import Option from "./option";

class Home extends Component {
  render() {
    return (
      <div className="wrapper-option">
        <Option 
          text="Search public repositories"
          image="search-repos.png"
          redirectTo="/search"
        />
        <Option 
          text="My repositories"
          image="my-repos.png"
          redirectTo="/repos"
        />
        <Option 
          text="My profile"
          image="profile.png"
          redirectTo="/profile"
        />
      </div>
    );
  }
};

export default Home;
