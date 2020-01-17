/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jsx, css, SerializedStyles } from "@emotion/core";
import colors from "./Colors";

const Footer: React.FC = (): JSX.Element => {
  const [view, setView]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);
  useEffect(():void => {
    switch (view) {
      case 0:
        document.title = "Random Alarm Clock";
        break;
      case 1:
        document.title = "How to - Random Alarm Clock";
        break;
      case 2:
        document.title = "Privacy Policy - Random Alarm Clock";
        break;
      case 3:
        document.title = "Contact - Random Alarm Clock";
        break;
      default:
        document.title = "Random Alarm Clock";
    }
  }, [view]);

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
          <Link to="/how-to" onClick={() => setView(1)}>
            <button css={footer__link} disabled={view === 1 ? true : false}>
              How to
            </button>
          </Link>
          <Link to="/privacy-policy" onClick={() => setView(2)}>
            <button css={footer__link} disabled={view === 2 ? true : false}>
              Privacy Policy
            </button>
          </Link>
          <Link to="/contact" onClick={() => setView(3)}>
            <button css={footer__link} disabled={view === 3 ? true : false}>
              Contact
            </button>
          </Link>
        </div>
        <div css={footer__copyWrap}>
          <p css={footer__copy}>&copy; 2020</p>
          <Link to="/" onClick={() => setView(0)}>
            <button css={footer__title} disabled={view === 0 ? true : false}>
              Random Alarm Clock
            </button>
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
    transform: rotate(180deg) translateY(0);
  }
  &:checked ~ div {
    transform: translateY(0);
  }
`;

const footer__checkArrow: SerializedStyles = css`
  cursor: pointer;
  transform: translateY(3rem);
  margin-bottom: 0.5rem;
  fill: ${colors.white};
  transition: 0.2s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const footer__content: SerializedStyles = css`
  transform: translateY(3rem);
  transition: 0.2s;
`;

const footer__list: SerializedStyles = css`
  margin-bottom: 0.5rem;
`;

const footer__link: SerializedStyles = css`
  border: none;
  background: transparent;
  margin: 0 0.5rem;
  color: ${colors.lightOrange};
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    color: ${colors.moreLightOrange};
  }
  &:active {
    color: ${colors.orange};
  }
  &:disabled {
    color: ${colors.deepOrange};
    cursor: default;
  }
`;

const footer__copyWrap: SerializedStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const footer__copy: SerializedStyles = css`
  margin-right: 0.25rem;
`;

const footer__title: SerializedStyles = css`
  border: none;
  background: transparent;
  text-decoration: underline;
  font-size: 1rem;
  color: ${colors.white};
  transition: 0.2s;
  &:disabled {
    cursor: default;
    text-decoration: none;
  }
`;

export default Footer;
