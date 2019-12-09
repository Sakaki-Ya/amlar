/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Footer = () => {
  return (
    <footer css={footer}>
      <a href="/" css={footer__link}>
        &#x1f4c4; Privacy Policy
      </a>
      <a href="/" css={footer__link}>
        &#x1f4e7; Contact
      </a>
      <p>&copy; 2019 Walke</p>
    </footer>
  );
};

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
  background-color: rgba(0, 0, 0, 0.7);

  font-size: 0.75em;
`;

const footer__link = css`
  color: white;
  text-decoration: none;
  margin-right: 1em;
`;

export default Footer;
