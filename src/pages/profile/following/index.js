import React, { Component, Fragment } from "react";

import userService from "../../../services/userService";

import Loading from "../../../components/loading";
import Message from "../../../components/message";
import UserList from "../../../components/user-list";

class Following extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      searching: false,
      users: []
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    const { login } = this.props;
    if (!login) return;
    
    this.setState({
      searching: true
    });

    userService.getFollowing(login)
      .then(
        users => {
          this.setState({
            searching: false,
            users
          })
        },
        error => {
          this.setState({
            message: error,
            searching: false
          });
        }
      );
  }

  handleCloseMessage() {
    this.setState({
      message: ""
    })
  }

  render() {
    const { message, users, searching } = this.state;
    
    return (
      <Fragment>
        <Message
          open={message.length > 0}
          title="Search fail"
          content={message}
          handleClose={() => this.handleCloseMessage()}
        />

        <Loading visible={searching} />
        <UserList users={users} />
      </Fragment>
    );
  }
}

export default Following;
