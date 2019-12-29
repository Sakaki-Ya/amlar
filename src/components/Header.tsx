/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx, css, SerializedStyles } from "@emotion/core";
import Colors from "./Colors";

const Header: React.FC = (): JSX.Element => (
  <header css={header}>
    <h1>
      <Link to="/" css={header__logo}>
        Walke
      </Link>
    </h1>
  </header>
);

const header: SerializedStyles = css`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 1em;
  padding: 1em;
  width: 100%;
`;

const header__logo: SerializedStyles = css`
  text-decoration: none;
  color: ${Colors.white};
`;

export default Header;
