import React from "react";

import "./styles.css";

const Container = ({ children, className, ...rest }) => (
  <div className={`repo-flex-container ${className}`} {...rest}>
    {children}
  </div>
);

export default Container;
