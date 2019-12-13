/** @jsx jsx */
import { jsx, css, SerializedStyles } from "@emotion/core";

const Header = () => (
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
`;

export default Header;
