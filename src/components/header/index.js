import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import "./styles.css";

import * as authenticationActions from "../../store/actions/authenticationActions";
import Button from "../button";
import FlexSpacer from "../flex-spacer";

class Header extends Component {
  render() {
    const { user, logout } = this.props;
    
    return (
      <div className="container">
        <FlexSpacer />
        <div className="container-items">
          <img src="assets/github-developer-logo.svg" alt="" className="logo" />
          <FlexSpacer />
          {user &&
            <Fragment>
              <Button 
                onClick={() => logout()} 
                className="btn-danger btn-logout">
                  Logout
              </Button>
              <span className="username">{user.login}</span>
              {user.avatar_url &&
                <img src={user.avatar_url} alt="" className="avatar" />}
            </Fragment>
          }
        </div>
        <FlexSpacer />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  user: state.authentication.user
});

export default connect(mapStateToProps, authenticationActions)(Header);
