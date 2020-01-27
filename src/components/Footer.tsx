/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/core";
import colors from "./Colors";

const Footer: React.FC = () => {
  const [view, setView] = useState("top");
  useEffect(() => {
    switch (view) {
      case "top":
        document.title = "Amlar";
        break;
      case "note":
        document.title = "Note - Amlar";
        break;
      case "policy":
        document.title = "Privacy Policy - Amlar";
        break;
      case "contact":
        document.title = "Contact - Amlar";
        break;
      default:
        document.title = "Amlar";
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
          <Link to="/note" onClick={() => setView("note")}>
            <button
              css={footer__link}
              disabled={view === "note" ? true : false}
            >
              Note
            </button>
          </Link>
          <Link to="/privacy-policy" onClick={() => setView("policy")}>
            <button
              css={footer__link}
              disabled={view === "policy" ? true : false}
            >
              Privacy Policy
            </button>
          </Link>
          <Link to="/contact" onClick={() => setView("contact")}>
            <button
              css={footer__link}
              disabled={view === "contact" ? true : false}
            >
              Contact
            </button>
          </Link>
        </div>
        <div css={footer__copyWrap}>
          <p css={footer__copy}>&copy; 2020</p>
          <Link to="/" onClick={() => setView("top")}>
            <button
              css={footer__title}
              disabled={view === "top" ? true : false}
            >
              Amlar
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

const footer = css`
  overflow-y: hidden;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const footer__check = css`
  display: none;
  &:checked ~ * svg {
    transform: rotate(180deg) translateY(0);
  }
  &:checked ~ div {
    visibility: visible;
    transform: translateY(0);
  }
`;

const footer__checkArrow = css`
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

const footer__content = css`
  visibility: hidden;
  transform: translateY(3rem);
  transition: 0.2s;
`;

const footer__list = css`
  margin-bottom: 0.5rem;
`;

const footer__link = css`
  border: none;
  background: transparent;
  margin: 0 0.5rem;
  color: ${colors.moreLightOrange};
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    color: ${colors.mostLightOrange};
  }
  &:active {
    color: ${colors.orange};
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const footer__copyWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const footer__copy = css`
  margin-right: 0.25rem;
  font-size: 0.9rem;
`;

const footer__title = css`
  border: none;
  background: transparent;
  text-decoration: underline;
  color: ${colors.white};
  transition: 0.2s;
  &:disabled {
    cursor: default;
    text-decoration: none;
  }
`;

export default Footer;
