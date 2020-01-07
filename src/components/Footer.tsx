/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx, css, SerializedStyles } from "@emotion/core";
import colors from "./Colors";

const Footer: React.FC = (): JSX.Element => (
  <footer css={footer}>
    <div css={footer__list}>
      <Link to="/how-to" css={footer__link}>
        &#x1f4c4; How to
      </Link>
      <Link to="/privacy-policy" css={footer__link}>
        &#x1f36a; Privacy Policy
      </Link>
      <Link to="/contact" css={footer__link}>
        &#x1f4e7; Contact
      </Link>
      <p css={footer__copyright}>&copy; 2019 Walke</p>
    </div>
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
  padding: 1em 5%;
  font-size: 0.75em;
`;

const footer__list: SerializedStyles = css`
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5em;
`;

const footer__link: SerializedStyles = css`
  color: ${colors.lightOrange};
  display: inline-flex;
  white-space: nowrap;
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
  display: inline-flex;
  white-space: nowrap;
  margin-left: 1em;
`;

export default Footer;
