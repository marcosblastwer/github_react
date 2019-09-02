import React from "react";

import "./styles.css";

const Button = ({ className, ...rest }) => (
  <button {...rest} className={`btn ${className}`}/>
);

export default Button;
