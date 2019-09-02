import React, { Fragment } from "react";

import User from "./user";

const UserList = ({ users }) => (
  <Fragment>
    {users && users.map(user => 
      <User 
        key={user.id}
        login={user.login} 
        avatar_url={user.avatar_url} 
        html_url={user.html_url}
      />
    )}
  </Fragment>
);

export default UserList;
