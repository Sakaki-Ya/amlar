/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/core";
import colors from "./Colors";

const Footer: React.FC = () => {
  const [page, setPage] = useState("top");
  useEffect(() => {
    switch (page) {
      case "top":
        document.title = "Amlar";
        break;
      case "note":
        document.title = "Note - Amlar";
        break;
      case "policy":
        document.title = "Privacy Policy - Amlar";
        break;
      default:
        document.title = "Amlar";
    }
  }, [page]);

  return (
    <footer css={footer}>
      <input id="footerCheck" type="checkbox" css={footer__check} />
      <label htmlFor="footerCheck">
        <svg
          id="checkArrow"
          width="18"
          css={footer__checkArrow}
          viewBox="0 0 512 512"
        >
          <path d="M255.992 92.089l-255.992 255.992 71.821 71.83 184.171-184.171 184.188 184.171 71.82-71.83z" />
        </svg>
      </label>
      <div css={footer__content}>
        <div css={footer__list}>
          <Link to="/note" onClick={() => setPage("note")}>
            <button
              css={footer__link}
              disabled={page === "note" ? true : false}
            >
              Note
            </button>
          </Link>
          <Link to="/privacy-policy" onClick={() => setPage("policy")}>
            <button
              css={footer__link}
              disabled={page === "policy" ? true : false}
            >
              Privacy Policy
            </button>
          </Link>
          <a href="https://forms.gle/PEFMkALLPSvXumaR7" css={footer__contact} target="_blank" rel="noopener noreferrer">
            <span>Contact</span>
            <svg css={footer__tabIcon} viewBox="0 0 512 512" width="16"><g><path d="M96 0v416h416v-416h-416zm376 376h-336v-336h336v336zM40 472v-376h-40v416h416v-40h-40zM232.812 312.829l117.859-117.86v84.797h40v-153.078h-153.077v40h84.796l-117.859 117.859z" /></g></svg>
          </a>
        </div>
        <div css={footer__copyWrap}>
          <p css={footer__copy}>&copy; 2020</p>
          <Link to="/" onClick={() => setPage("top")}>
            <button
              css={footer__title}
              disabled={page === "top" ? true : false}
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
`;

const footer__check = css`
  display: none;
  &:checked ~ * #checkArrow {
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const footer__link = css`
  border: none;
  background: transparent;
  margin: 0 0.5rem;
  color: ${colors.moreLightOrange};
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
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

const footer__contact = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: bold;
  color: ${colors.moreLightOrange};
  fill: ${colors.moreLightOrange};
  transition: .2s;
  &:hover {
    color: ${colors.mostLightOrange};
    fill: ${colors.mostLightOrange};
  }
  &:active {
    color: ${colors.orange};
    fill: ${colors.orange};
  }
`;

const footer__tabIcon = css`
  margin-left: .35rem;
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
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: ${colors.white};
  transition: 0.2s;
  &:disabled {
    cursor: default;
    text-decoration: none;
  }
`;

export default Footer;
