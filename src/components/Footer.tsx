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
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  background-color: rgba(0, 0, 0, 0.6);

  font-size: 0.75em;
`;

const footer__link = css`
  color: ${colors.green};
  text-decoration: none;
  margin-right: 1em;
`;

const footer__copyright = css`
  margin-left: 1em;
`;

export default Footer;
