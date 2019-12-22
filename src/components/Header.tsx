/** @jsx jsx */
import React from "react";
import { jsx, css, SerializedStyles } from "@emotion/core";

const Header: React.FC = () => (
  <header css={header}>
    <h1>Walke</h1>
  </header>
);

const header: SerializedStyles = css`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  margin-bottom: 1em;
  padding: 1em;
  width: 100%;
`;

export default Header;
