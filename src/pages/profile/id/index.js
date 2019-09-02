import React from "react";

import "./styles.css";

const ProfileId = ({ login, avatarUrl, profileUrl }) => (
  <div className="profile-id">
    <div>
      <img src={avatarUrl} alt="" height="256" width="256" />
      <div>{login}</div>
    </div>
    <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="btn btn-info">
      <img src="assets/external-link.png" alt="" />
      See on Github
    </a>
  </div>
);

export default ProfileId;
