import React from "react";
import { Link, Route } from "react-router-dom";

import "./styles.css";

const NavbarLink = ({ label, count, to }) =>(
  <Route
    path={to}
    children={({ match }) => (
      <Link to={to}>
        <div className="profile-navbar-link" style={match 
          ? {borderBottom: "2px solid #008fe2", color: "#008fe2"} 
          : {}} >
          <span>{label}</span>
          <span className="profile-navbar-badge">{count}</span>
        </div>
      </Link>
    )}
  />
);

export default NavbarLink;
