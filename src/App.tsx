/** @jsx jsx */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import emotionReset from "emotion-reset";
import { jsx, Global, css, SerializedStyles } from "@emotion/core";
import colors from "./components/Colors";
import Main from "./components/Main";
import "./stars.css";
import "./stars2.css";
import "./stars3.css";

const App: React.FC = (): JSX.Element => (
  <React.Fragment>
    <Global styles={global} />
    <div css={starsWrap}>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
    <div css={app__wrap}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  </React.Fragment>
);

const global: SerializedStyles = css`
  ${emotionReset};
  body {
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(180deg, ${colors.blue}, ${colors.darkBlue});
    background-size: 400% 400%;
    animation: bgAnime 60s ease infinite;
    @keyframes bgAnime {
      0% {
        background-position: 50% 0%;
      }
      50% {
        background-position: 50% 100%;
      }
      100% {
        background-position: 50% 0%;
      }
    }
    width: 100vw;
    height: 100vh;
    text-align: center;
    color: ${colors.white};
    overflow: hidden;
  }
  button,
  a {
    cursor: pointer;
  }
`;

const app__wrap: SerializedStyles = css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem 5%;
`;

const starsWrap: SerializedStyles = css`
  position: fixed;
`;

export default App;
