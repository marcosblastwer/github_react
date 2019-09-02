import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import "./styles.css";

const Loading = ({ className, visible }) => (
  <CircularProgress 
    className={`loading ${visible ? "loading-visible" : "loading-hidden"} ${className}`}
    size={24}
  />
);

export default Loading;
