import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/button";

const NotFound = () => (
  <Fragment>
    <Link to="/home">
      <Button className="go-back-button">
        Go to homepage
      </Button>
    </Link>
    <div className="not-found-image">
      <img src="assets/404-page.gif" alt="" />
    </div>
  </Fragment>
);

export default NotFound;
