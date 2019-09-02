import React from "react";

import "./styles.css";

const User = ({ login, avatar_url, html_url }) => (
  <a 
    href={html_url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="user-wrapper">
      
    <img src={avatar_url} alt="" />
    <span>{login}</span>
  </a>
);

export default User;
