import React from "react";
import { connect } from "react-redux";

import "./styles.css";

import * as routerActions from "../../store/actions/routerActions";

import Button from "../button";

const Breadcrumb = ({ path, redirect }) => (
  <div className="breadcrumb">
    <Button
      onClick={() => redirect("/home")} 
      className="breadcrumb-home-button">
        Home
    </Button>

    <span className="breadcrumb-separator">/</span>
    <span className="breadcrumb-path">{path}</span>
  </div>
)

export default connect(null, routerActions)(Breadcrumb);
