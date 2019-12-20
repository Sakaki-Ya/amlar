/** @jsx jsx */
import React /* , { FC } */ from "react";
import emotionReset from "emotion-reset";
import { jsx, Global, css, SerializedStyles } from "@emotion/core";
import colors from "./components/Colors";
import Header from "./components/Header";
import Clock from "./components/Clock";
import Footer from "./components/Footer";
// import "./background.sass";

const App: React.FC = () => (
  <React.Fragment>
    <Global styles={global} />
    <div id="stars" /* css={stars} */ />
    {/* <div id="stars2" />
    <div id="stars3" /> */}
    <Header />
    <Clock />
    <Footer />
  </React.Fragment>
);

const global: SerializedStyles = css`
  ${emotionReset};

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    color: ${colors.white};
  }
  body {
    background: radial-gradient(ellipse at center, #0f4c81 50%, #1f233a 100%);
    overflow: hidden;
  }
  button,
  input,
  a {
    cursor: pointer;
  }
`;

// const stars: SerializedStyles = css`
//   @function multiple-box-shadow($n) {
//     $value: "#{random(2000)}px #{random(20000)}px #FFF";
//     @for $i from 2 through $n {
//       $value: "#{$value} , #{random(2000)}px #{random(2000)}px #FFF";
//     }
//     @return unquote($value);
//   }

//   #stars {
//     width: 1px;
//     height: 1px;
//     background: transparent;
//     box-shadow: multiple-box-shadow(700);
//     animation: animStar 50s linear infinite;
//     &:after {
//       content: "";
//       position: absolute;
//       top: 2000px;
//       width: 1px;
//       height: 1px;
//       background: transparent;
//       box-shadow: multiple-box-shadow(700);
//     }
//   }

//   @keyframes animStar {
//     from {
//       transform: translateY(0px);
//     }
//     to {
//       transform: translateY(-2000px);
//     }
//   }
// `;

export default App;
