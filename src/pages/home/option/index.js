import React from "react";
import { connect } from "react-redux";

import "./styles.css";

import * as routerActions from "../../../store/actions/routerActions";

const Option = ({ image, redirect, redirectTo, text }) => (
  <button 
    onClick={() => redirect(redirectTo)}
    className="home-option">
      <img src={`assets/${image}`} alt="" />
      {text}
  </button>
);

export default connect(null, routerActions)(Option);
