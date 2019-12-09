/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// import logo from "../logo.svg";

const Header = () => {
  return (
    <header>
      <h1 css={header__logo}>Walke</h1>
      {/* <img src={logo} css={header__logo} alt="logo" /> */}
    </header>
  );
};

const header__logo = css`
  margin-bottom: 1em;
`;

export default Header;
