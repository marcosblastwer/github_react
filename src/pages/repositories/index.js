import React, { Component, Fragment } from "react";

import "./styles.css";
import authenticationService from "../../services/authenticationService";
import repositoryService from "../../services/repositoryService";

import Breadcrumb from "../../components/breadcrumb";
import Loading from "../../components/loading";
import Message from "../../components/message";
import RepositoryList from "../../components/repository-list";

class Repositories extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: "",
      repos: [],
      searching: false
    }
  }

  componentDidMount() {
    this.getRepos();
  }

  async getRepos() {
    const user = authenticationService.currentUserValue;
    if (!user) return;
    
    this.setState({
      searching: true
    });

    const { login } = user;
    
    repositoryService.userRepositories(login)
      .then(
        repos => {
          this.setState({
            repos,
            searching: false
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
    const { withoutBreadcrumbs } = this.props;
    const { message, repos, searching } = this.state;

    return (
      <Fragment>
        <Message
          open={message.length > 0}
          title="Search fail"
          content={message}
          handleClose={() => this.handleCloseMessage()}
        />

        {!withoutBreadcrumbs && <Breadcrumb path="My repositories" />}

        <Loading visible={searching} className="loading" />
        <RepositoryList repos={repos} />
      </Fragment>
    );
  }
};

export default Repositories;
