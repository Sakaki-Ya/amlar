/** @jsx jsx */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { jsx, css, SerializedStyles } from "@emotion/core";
import Clock from "./Clock";
import HowTo from "./HowTo";
import PrivacyPolicy from "./PrivacyPolicy";
import Contact from "./Contact";
import Footer from "./Footer";

const Main: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const main: SerializedStyles = css`
  max-width: 760px;
  width: 100%;
  margin: auto;
`;

export default Main;
