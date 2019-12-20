/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import colors from "./Colors";

const Footer = () => (
  <footer css={footer}>
    <a href="/" css={footer__link}>
      &#x1f4c4; Privacy Policy
    </a>
    <a href="/" css={footer__link}>
      &#x1f4e7; Contact
    </a>
    <p css={footer__copyright}>&copy; 2019 Walke</p>
  </footer>
);

const footer = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 1.5em;
  font-size: 0.75em;
`;

const footer__link = css`
  color: ${colors.lightOrange};
  text-decoration: none;
  margin-right: 1em;
  font-weight: bold;
  transition: all 0.2s ease 0s;
  &:hover {
    color: ${colors.moreLightOrange};
  }
  &:active {
    color: ${colors.orange};
  }
`;

const footer__copyright = css`
  margin-left: 1em;
`;

export default Footer;
