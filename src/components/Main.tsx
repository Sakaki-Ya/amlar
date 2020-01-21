/** @jsx jsx */
import React from "react";
import { useTransition, animated } from "react-spring";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { jsx, css } from "@emotion/core";
import Clock from "./Clock";
import Note from "./Note";
import PrivacyPolicy from "./PrivacyPolicy";
import Contact from "./Contact";
import Footer from "./Footer";

const Main: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    initial: { display: "block", opacity: 1 },
    from: { display: "none", opacity: 0 },
    enter: { display: "block", opacity: 1 },
    leave: { display: "none", opacity: 0 }
  });

  return (
    <React.Fragment>
      <div css={main}>
        {transitions(
          (props, item) =>
            item && (
              <animated.div style={props}>
                <Switch>
                  <Route exact path="/" component={Clock} />
                  <Route exact path="/note" component={Note} />
                  <Route
                    exact
                    path="/privacy-policy"
                    component={PrivacyPolicy}
                  />
                  <Route exact path="/contact" component={Contact} />
                  <Redirect to="/" />
                </Switch>
              </animated.div>
            )
        )}
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
  padding: 1rem 5%;
`;

export default Main;
