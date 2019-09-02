import React from "react";

import "./styles.css";

import FlexSpacer from "../flex-spacer";

const PageContainer = (props) => (
  <div className="page-container">
    <FlexSpacer />
    <div className="page-container-items">
      { props.children }
    </div>
    <FlexSpacer />
  </div>
);

export default PageContainer;
