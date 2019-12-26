/** @jsx jsx */
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import emotionReset from "emotion-reset";
import { jsx, Global, css, SerializedStyles } from "@emotion/core";
import Colors from "./components/Colors";
import Header from "./components/Header";
import Clock from "./components/Clock";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Alarming from "./components/Alarming";

const App: React.FC = () => (
  <React.Fragment>
    <Global styles={global} />
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Clock />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/alarming" component={Alarming} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
    {/* <div css={stars} />
    <div css={stars2} />
     <div css={stars3} /> */}
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
    background: radial-gradient(ellipse at center, #0f4c81 50%, #1f233a 100%);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    color: ${Colors.white};
    overflow: hidden;
  }
  button,
  input,
  a {
    cursor: pointer;
  }
`;

export default App;
