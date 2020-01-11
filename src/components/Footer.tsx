/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx, css, SerializedStyles } from "@emotion/core";
import colors from "./Colors";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer css={footer}>
      <input id="footerCheck" type="checkbox" css={footer__check} />
      <label htmlFor="footerCheck">
        <svg
          width="18"
          css={footer__checkArrow}
          id="checkArrow"
          viewBox="0 0 512 512"
        >
          <path d="M255.992 92.089l-255.992 255.992 71.821 71.83 184.171-184.171 184.188 184.171 71.82-71.83z" />
        </svg>
      </label>
      <div css={footer__content}>
        <div css={footer__list}>
          <Link to="/how-to" css={footer__link}>
            How to
          </Link>
          <Link to="/privacy-policy" css={footer__link}>
            Privacy Policy
          </Link>
          <Link to="/contact" css={footer__link}>
            Contact
          </Link>
        </div>
        <div css={footer__copyWrap}>
          <p css={footer__copy}>&copy; 2020</p>
          <Link to="/" css={footer__title}>
            <h1>Random Alarm Clock</h1>
          </Link>
        </div>
      </div>
    </footer>
  );
};

const footer: SerializedStyles = css`
  overflow-y: hidden;
`;

const footer__check: SerializedStyles = css`
  display: none;
  &:checked ~ * svg {
    transform: rotate(180deg) translate(0, 0);
  }
  &:checked ~ div {
    transform: translate(0, 0);
  }
`;

const footer__checkArrow: SerializedStyles = css`
  cursor: pointer;
  transform: translate(0, 3rem);
  margin-bottom: 0.5rem;
  fill: ${colors.white};
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const footer__content: SerializedStyles = css`
  transform: translate(0, 3rem);
  transition: 0.2s;
`;

const footer__list: SerializedStyles = css`
  margin-bottom: 0.5rem;
`;

const footer__link: SerializedStyles = css`
  margin: 0 0.5rem;
  color: ${colors.lightOrange};
  text-decoration: none;
  font-weight: bold;
  transition: all 0.2s ease 0s;
  &:hover {
    color: ${colors.moreLightOrange};
  }
  &:active {
    color: ${colors.orange};
  }
`;

const footer__copyWrap: SerializedStyles = css`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const footer__copy: SerializedStyles = css`
  margin-right: 0.25rem;
`;

const footer__title: SerializedStyles = css`
  color: ${colors.white};
`;

export default Footer;
