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
    <div css={wrap}>
      <BrowserRouter>
        <Header />
        <div css={main}>
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
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  </React.Fragment>
);

const global: SerializedStyles = css`
  ${emotionReset};
  body {
    font-family: 'Helvetica Neue','Helvetica','Arial',sans-serif;
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
  }
  button,
  input,
  a {
    cursor: pointer;
  }
`;

const wrap: SerializedStyles = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const main: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const starsWrap: SerializedStyles = css`
  position: relative;
`;

export default App;
