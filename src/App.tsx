/** @jsx jsx */
import React /* , { FC } */ from "react";
import emotionReset from "emotion-reset";
import { jsx, Global, css, SerializedStyles } from "@emotion/core";
import Header from "./components/Header";
import Clock from "./components/Clock";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <React.Fragment>
    <Global styles={global} />
    <div css={main}>
      <Header />
      <Clock />
    </div>
    <Footer />
  </React.Fragment>
);

const global: SerializedStyles = css`
  ${emotionReset};

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: linear-gradient(180deg, #0f4c81, #0e0035);
    background-size: 400% 400%;
    animation: bgAnime 75s ease infinite;
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

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    color: white;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  button,
  input,
  a {
    cursor: pointer;
  }
`;

const main: SerializedStyles = css`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    rgba(230, 180, 34, 0.15),
    rgba(0, 0, 0, 0),
    rgba(233, 82, 149, 0.15),
    rgba(0, 0, 0, 0),
    rgba(129, 204, 69, 0.2)
  );
  background-size: 800% 800%;
  animation: bgAnime2 120s ease infinite;
  @keyframes bgAnime2 {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

export default App;
