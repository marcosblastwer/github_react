import React, { Component } from "react";
import { connect } from "react-redux";

import authenticationService from "../../services/authenticationService";
import * as authenticationActions from "../../store/actions/authenticationActions";

class Wrapper extends Component {
  componentDidMount() {
    authenticationService.currentUser.subscribe(user => {
      const { from } = this.props.location | "/";
      this.props.updateCredentials(user, from);
    });
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default connect(null, authenticationActions)(Wrapper);
