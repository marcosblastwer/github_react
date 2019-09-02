import React from "react";

import "./styles.css";

const Input = ({ type, className, ...rest }) => 
  <input 
    {...rest} 
    type={type ? type : "text"}
    className={className} />

export default Input;
