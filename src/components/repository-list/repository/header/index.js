import React from "react";

import "./styles.css";

import Container from "../container";
import FlexSpacer from "../../../flex-spacer";
import Tag from "../tag";

const Header = ({ fullName, language, favorites }) => (
  <Container>
    <span className="repo-name">{fullName}</span>
    <FlexSpacer />

    {language && <Tag>{language}</Tag>}

    {favorites > 0 &&
      <Tag className="lmargin">
        <img src="assets/favorite.png" alt="" />
        <span>
          {favorites > 1000 
            ? `${Math.floor(favorites/1000)}k`
            : favorites
          }
        </span>
      </Tag>
    }
  </Container>
);

export default Header;
