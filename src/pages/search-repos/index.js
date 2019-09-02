import React, { Component, Fragment } from "react";

import "./styles.css";
import repositoryService from "../../services/repositoryService";

import Breadcrumb from "../../components/breadcrumb";
import Input from "../../components/input";
import Loading from "../../components/loading";
import Message from "../../components/message";
import RepositoryList from "../../components/repository-list";

class SearchRepos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      repos: [],
      search: "",
      searching: false
    }
  }

  handleChange(event) {
    const { value } = event.target;
    const searching = value.length > 0;
    
    this.setState({
      search: value,
      searching
    });

    // Utilizei o setTimeout para lidar com o pressionamento de tecla, considerando um intervalo
    // máximo entre os pressionamentos de teclas de 2segundos para disparar a requisição
    // isso evita consumo excessivo da API
    if (searching) {
      setTimeout(() => {
        this.getRepos(value);
      }, 2000);
    } else {
      this.setState({
        repos: [],
        searching: false
      });
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    
    this.setState({
      searching: true
    });
    this.getRepos(this.state.search);
  }

  async getRepos(search) {
    if (search !== this.state.search) { return }
    if (search.length === 0) {
      this.setState({
        ...this.state,
        repos: [],
        searching: false
      });
      return;
    }
    
    repositoryService.searchPublic(search)
      .then(
        repos => {
          this.setState({
            ...this.state,
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
    const { message, repos, search, searching } = this.state;
    return (
      <Fragment>
        <Message
          open={message.length > 0}
          title="Search fail"
          content={message}
          handleClose={() => this.handleCloseMessage()}
        />
        <Breadcrumb path="Search public repos" />
        <form onSubmit={this.handleSubmit.bind(this)} className="search-box">
          <Input 
            autoFocus
            name="search" 
            placeholder="Name, description or tags" 
            value={search} 
            onChange={this.handleChange.bind(this)}
            className="search-box"
          />
        </form>

        <Loading visible={searching} />
        <RepositoryList repos={repos} />
      </Fragment>
    );
  }
}

export default SearchRepos;
