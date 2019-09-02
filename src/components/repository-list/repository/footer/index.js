import React, { Fragment } from "react";
import Tooltip from '@material-ui/core/Tooltip';

import "./styles.css";
import Container from "../container";
import FlexSpacer from "../../../flex-spacer";

const Footer = ({ license, openIssues, url, ...rest }) => (
  <Container {...rest} className="repo-footer" >
    {license &&
      <Fragment>
        <span>
          {license.name}
        </span>
        {openIssues > 0 && 
          <div className="footer-separator" />
        }
      </Fragment>
    }

    {openIssues > 0 &&
      <span>
        {openIssues > 0 && `${openIssues} opened issues`}
      </span>
    }

    <FlexSpacer />

    <Tooltip title="Open on Github" placement="top">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src="assets/external-link.png" alt="" />
      </a>
    </Tooltip>
  </Container>
);

export default Footer;
