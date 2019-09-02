import React from "react";

import "./styles.css";

import Footer from "./footer";
import Header from "./header";

const Repository = ({ repo }) => (
  <div className="repo-wrapper">
    <Header
      fullName={repo.full_name}
      language={repo.language}
      favorites={repo.stargazers_count}
    />
    
    <p className="repo-description">{repo.description}</p>

    <Footer
      license={repo.license}
      openIssues={repo.open_issues_count}
      url={repo.html_url} 
    />
  </div>
);

export default Repository;
