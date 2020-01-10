/** @jsx jsx */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { jsx, css, SerializedStyles } from "@emotion/core";
import colors from "./Colors";

const Footer: React.FC = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const showFooter = (): void => {
    if (visible) {
      setVisible(false);
      return;
    }
    setVisible(true);
  };

  const footer__content: SerializedStyles = css`
    visibility: ${visible ? "visible" : "hidden"};
    margin-top: 1rem;
    font-size: 0.75rem;
  `;

  const footer__visibleButtonWrap: SerializedStyles = css`
    /* position: absolute;
    bottom: 0;
    left: 0; */
  `;

  const footer__visibleButton: SerializedStyles = css`
    background: transparent;
    border: none;
    width: 1rem;
    height: 1rem;
    margin: 0 1rem;
    border-bottom: 4px solid ${colors.white};
    border-right: 4px solid ${colors.white};
    opacity: .6;
    transform: ${visible ? "rotate(45deg)" : "rotate(225deg)"};
    &:hover{
      opacity: 1;
    }
  `;

  return (
      <footer css={footer}>
      <div css={footer__visibleButtonWrap}>
        <button onClick={showFooter} css={footer__visibleButton} />
      </div>
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
  position:relative;
`;

const footer__list: SerializedStyles = css`
  margin-bottom: 0.35rem;
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
  font-size: 1rem;
`;

export default Footer;
