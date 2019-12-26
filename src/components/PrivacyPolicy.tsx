/** @jsx jsx */
import React from "react";
import { jsx, css, SerializedStyles } from "@emotion/core";
import Colors from "./Colors";

const PrivacyPolicy: React.FC = () => (
  <div css={policy}>
    <h2 css={policy__h2}>Privacy Policy</h2>
    <p css={policy__text}>
      This site uses cookies to collect traffic data using the access analysis
      tool "Google Analytics".
    </p>
    <p css={policy__text}>
      Traffic data is collected anonymously and is not personally identifiable.
    </p>
  </div>
);

const policy: SerializedStyles = css`
  max-width: 480px;
  text-align: center;
  margin: 0 auto;
  padding: 0 5%;
`;

const policy__h2: SerializedStyles = css`
  font-size: 1.25em;
  margin-bottom: 1em;
  color: ${Colors.lightOrange};
  font-weight: bold;
`;

const policy__text: SerializedStyles = css`
  display: inline-block;
  text-align: left;
  line-height: 1.5em;
  margin-bottom: 0.5em;
`;

export default PrivacyPolicy;
