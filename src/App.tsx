/** @jsx jsx */
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import emotionReset from "emotion-reset";
import { jsx, Global, css, SerializedStyles } from "@emotion/core";
import Colors from "./components/Colors";
import Header from "./components/Header";
import Clock from "./components/Clock";
import HowTo from "./components/HowTo";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
    <div css={main}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Clock />
          </Route>
          <Route exact path="/how-to">
            <HowTo />
          </Route>
          <Route exact path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
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
    background: linear-gradient(180deg, ${Colors.blue}, ${Colors.darkBlue});
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
    box-sizing: border-box;
    margin: 0;
    width: 100vw;
    height: 100vh;
    color: ${Colors.white};
    overflow: hidden;
    position: relative;
  }
  button,
  input,
  a {
    cursor: pointer;
  }
`;

const main = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const starsWrap = css`
  position: relative;
  top: 0;
  left: 0;
`;

export default App;
