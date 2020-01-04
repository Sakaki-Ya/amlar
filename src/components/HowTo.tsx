/** @jsx jsx */
import React from "react";
import { jsx, css, SerializedStyles } from "@emotion/core";
import Colors from "./Colors";

const HowTo: React.FC = (): JSX.Element => (
  <React.Fragment>
    <div css={contact__titleWrap}>
      <h2 css={contact__h2}>How to</h2>
    </div>
  </React.Fragment>
);

const contact__titleWrap: SerializedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

// const contact__icon: SerializedStyles = css`
//   max-width: 30px;
//   margin-right: 0.5em;
// `;

const contact__h2: SerializedStyles = css`
  font-size: 1.25em;
  color: ${Colors.lightOrange};
  font-weight: bold;
`;

export default HowTo;
