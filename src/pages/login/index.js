import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";

import * as authenticationActions from "../../store/actions/authenticationActions";
import authenticationService from "../../services/authenticationService";

import Button from "../../components/button";
import Checkbox from "../../components/checkbox";
import Input from "../../components/input";
import Loading from "../../components/loading";
import Message from "../../components/message";

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      message: "",
      username: "",
      password: "",
      stay: false,
      submitting: false
    };

    this.handleChange = this.handleChange.bind(this);
    
    const user = authenticationService.currentUserValue;
    if (user) { 
      this.props.updateCredentials(user, "/home");
    }
  }

  handleChange(event) {
    const {name, value, checked, type} = event.target;
    const newValue = type === "checkbox" ? checked : value;
    
    this.setState({
      [name]: newValue
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      submitting: true
    });

    const { username, password, stay } = this.state;

    authenticationService.login(username, password, stay)
      .then(
        user => {
          const { from } = this.props.location.state || { from: { pathname: "/" } };
          this.props.login(user, from);
        },
        error => {
          this.setState({
            message: error,
            submitting: false
          });
        }
      )
  }

  handleCloseMessage() {
    this.setState({
      message: ""
    })
  }

  render() {
    const { message, username, password, stay, submitting } = this.state;

    return (
      <div className="login-wrapper">
        <Message
          open={message.length > 0}
          title="Authentication fail"
          content={message}
          handleClose={() => this.handleCloseMessage()}
        />
        <img src="assets/github-logo.png" alt="" className="github-logo" />

        <span className="login-title">Github credentials</span>

        <form 
          disabled={submitting}
          onSubmit={e => this.handleSubmit(e)} >

          <label htmlFor="username">Username</label>
          <Input
            autoFocus
            name="username" 
            placeholder="Username"
            value={username}
            onChange={e => this.handleChange(e)}
          />

          <label htmlFor="password">Password</label>
          <Input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={password}
            onChange={e => this.handleChange(e)}
          />

          <Checkbox 
            name="stay" 
            label="Stay connected"
            value={stay}
            onChange={e => this.handleChange(e)} />

          <Button type="submit" className="btn-info">Login</Button>
        </form>
        <Loading visible={submitting} className="loading-align" />
      </div>
    );
  }
}

export default connect(null, authenticationActions)(Login);
