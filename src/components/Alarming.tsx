/** @jsx jsx */
import React from "react";
import { jsx, css, SerializedStyles } from "@emotion/core";

const Alarming: React.FC = () => {
  return (
    <div css={wrap}>
      <h1>Wake Up!!</h1>
    </div>
  );
};

const wrap: SerializedStyles = css`
  background-color: white;
`;

export default Alarming;
