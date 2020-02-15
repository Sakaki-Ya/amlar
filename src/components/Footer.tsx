/** @jsx jsx */
import { useGlobal } from "reactn";
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/core";
import colors from "./Colors";

const Footer: React.FC = () => {
  const [page, setPage] = useGlobal("page");

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
          <Link to="/note">
            <button
              css={footer__link}
              onClick={() => setPage("note")}
              disabled={page === "note" ? true : false}
            >
              Note
            </button>
          </Link>
          <Link to="/privacy-policy">
            <button
              css={footer__link}
              onClick={() => setPage("policy")}
              disabled={page === "policy" ? true : false}
            >
              Privacy Policy
            </button>
          </Link>
          <Link to="/contact">
            <button
              css={footer__link}
              onClick={() => setPage("contact")}
              disabled={page === "contact" ? true : false}
            >
              Contact
            </button>
          </Link>
        </div>
        <div css={footer__copyWrap}>
          <p css={footer__copy}>&copy; 2020</p>
          <Link to="/">
            <button
              css={footer__title}
              onClick={() => setPage("top")}
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
  font-size: 1rem;
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

const footer__copyWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const footer__copy = css`
  margin-right: 0.25rem;
`;

const footer__title = css`
  border: none;
  background: transparent;
  text-decoration: underline;
  font-size: 1rem;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: ${colors.white};
  transition: 0.2s;
  &:disabled {
    cursor: default;
    text-decoration: none;
  }
`;

export default Footer;
