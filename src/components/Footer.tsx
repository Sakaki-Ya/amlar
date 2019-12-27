/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx, css, SerializedStyles } from "@emotion/core";
import colors from "./Colors";

const Footer: React.FC = (): JSX.Element => (
  <footer css={footer}>
    <Link to="/privacy-policy" css={footer__link}>
      &#x1f4c4; Privacy Policy
    </Link>
    <Link to="/contact" css={footer__link}>
      &#x1f4e7; Contact
    </Link>
    <p css={footer__copyright}>&copy; 2019 Walke</p>
  </footer>
);

const footer: SerializedStyles = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5em;
  font-size: 0.75em;
`;

const footer__link: SerializedStyles = css`
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

const footer__copyright: SerializedStyles = css`
  margin-left: 1em;
`;

export default Footer;
