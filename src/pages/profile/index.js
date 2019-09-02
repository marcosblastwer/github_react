import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import "./styles.css";

import authenticationService from "../../services/authenticationService";
import * as routerActions from "../../store/actions/routerActions";

import Breadcrumb from "../../components/breadcrumb";
import Followers from "./followers";
import Following from "./following";
import ProfileId from "./id";
import NavbarLink from "./navbar-link";
import Repositories from "../repositories";

class Profile extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.getUser();
  }

  async getUser() {
    const user = authenticationService.currentUserValue;
    this.setState({ user });
    
    const { match, redirect } = this.props;
    redirect(`${match.path}/repos`);
  }

  render() {
    const { match } = this.props;
    const { user } = this.state;
    
    const linkRepos = `${match.path}/repos`;
    const linkFollowers = `${match.path}/followers`;
    const linkFollowing = `${match.path}/following`;

    return (
      <Fragment>
        <Breadcrumb path="My profile" />

        {user && 
          <div className="profile-wrapper">
            <ProfileId 
              login={user.login} 
              since={user.created_at}
              avatarUrl={user.avatar_url}
              profileUrl={user.html_url}
            />

            <div className="profile-data">
              <div className="profile-navbar">
                <NavbarLink
                  label="Repositories"
                  count={user.public_repos}
                  to={linkRepos} />

                <NavbarLink
                  label="Followers"
                  count={user.followers}
                  to={linkFollowers} />
                
                <NavbarLink
                  label="Following"
                  count={user.following}
                  to={linkFollowing} />
              </div>

              {/* Utilizei a ideia de rotas aninhadas para lidar com a transição entre as abas do perfil do usuário */}
              <div>
                <Route path={linkRepos} 
                  render={props => 
                    <Repositories {...props} withoutBreadcrumbs={true} />
                  } 
                />
                <Route path={linkFollowers} 
                  render={props =>
                    <Followers {...props} login={user.login} />}
                />
                <Route path={linkFollowing} 
                  render={props =>
                    <Following {...props} login={user.login} />}
                />
              </div>
            </div>
          </div>
        }
      </Fragment>
    );
  }
}

export default connect(null, routerActions)(Profile);
