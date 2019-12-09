/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Header = () => (
  <header>
    <h1 css={header__logo}>Walke</h1>
  </header>
);

const header__logo = css`
  margin-bottom: 1em;
`;

export default Header;
