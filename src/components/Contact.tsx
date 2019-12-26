/** @jsx jsx */
import React from "react";
import { jsx, css, SerializedStyles } from "@emotion/core";
import Colors from "./Colors";

const Contact: React.FC = () => (
  <div>
    <h2 css={contact__h2}>Contact</h2>
  </div>
);

const contact__h2: SerializedStyles = css`
  font-size: 1.25em;
  margin-bottom: 1em;
  color: ${Colors.lightOrange};
  font-weight: bold;
`;

export default Contact;
