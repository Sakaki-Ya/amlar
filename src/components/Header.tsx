/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx, css, SerializedStyles } from "@emotion/core";
import Colors from "./Colors";

const Header: React.FC = (): JSX.Element => (
  <header css={header}>
    <h1>
      <Link to="/" css={header__logo}>
        Random Alarm Clock
      </Link>
    </h1>
  </header>
);

const header: SerializedStyles = css`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 1rem 5%;
`;

const header__logo: SerializedStyles = css`
  text-decoration: none;
  color: ${Colors.white};
`;

export default Header;
