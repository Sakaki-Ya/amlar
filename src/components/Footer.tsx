/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx, css, SerializedStyles } from "@emotion/core";
import colors from "./Colors";

const Footer: React.FC = (): JSX.Element => (
  <footer css={footer}>
    <div css={footer__list}>
      <Link to="/how-to" css={footer__link}>How to</Link>
      <Link to="/privacy-policy" css={footer__link}>Privacy Policy</Link>
      <Link to="/contact" css={footer__link}>Contact</Link>
      <p css={footer__copyright}>&copy; 2019 Random Alarm Clock</p>
    </div>
  </footer>
);

const footer: SerializedStyles = css`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  padding: 1rem 5%;
  font-size: 0.75rem;
`;

const footer__list: SerializedStyles = css`
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;
`;

const footer__link: SerializedStyles = css`
  color: ${colors.lightOrange};
  display: inline-flex;
  white-space: nowrap;
  text-decoration: none;
  margin-right: 1rem;
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
  margin-left: 1rem;
`;

export default Footer;
