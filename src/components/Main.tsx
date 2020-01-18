/** @jsx jsx */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { jsx, css } from "@emotion/core";
import Clock from "./Clock";
import Notes from "./Notes";
import PrivacyPolicy from "./PrivacyPolicy";
import Contact from "./Contact";
import Footer from "./Footer";

const Main: React.FC = () => {
  return (
    <React.Fragment>
      <div css={main}>
        <Switch>
          <Route exact path="/" component={Clock} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const main = css`
  max-width: 760px;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  padding: 1rem 0;
`;

export default Main;
