/** @jsx jsx */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import emotionReset from "emotion-reset";
import { jsx, Global, css, SerializedStyles } from "@emotion/core";
import colors from "./components/Colors";
import Main from "./components/Main";
import "./backGroundStars/stars.css";
import "./backGroundStars/stars2.css";
import "./backGroundStars/stars3.css";

const App: React.FC = () => {
  return (
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
};

const global: SerializedStyles = css`
  ${emotionReset};
  body {
    @font-face {
      font-family: "slick";
      font-weight: normal;
      font-style: normal;
      font-display: swap;
      src: url("https://d33wubrfki0l68.cloudfront.net/af91c12f0f406a4f801aeb3b398768fe41d8f864/5c9aa/static/media/slick.b7c9e1e4.woff")
        format("woff2");
    }
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(180deg, ${colors.blue}, ${colors.darkBlue});
    background-attachment: fixed;
    background-size: 100vw 200vh;
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
    min-height: 100vh;
    overflow-x: hidden;
    text-align: center;
    color: ${colors.white};
  }
  button,
  a {
    cursor: pointer;
  }
`;

const app__wrap: SerializedStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const starsWrap: SerializedStyles = css`
  position: fixed;
`;

export default App;
