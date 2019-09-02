import React from "react";

import "./styles.css";

import Container from "../container";

const Tag = ({ children, className, ...rest }) => (
  <Container {...rest} className={`repo-tag ${className}`}>
    {children}
  </Container>
);

export default Tag;
