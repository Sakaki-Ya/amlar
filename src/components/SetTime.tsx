/** @jsx jsx */
import React, { memo, useGlobal } from "reactn";
import { ChangeEvent } from "react";
import { jsx, css, SerializedStyles } from "@emotion/core";
import colors from "./Colors";

type SetTimeComponetProps = {
  inputTime: string;
  getInputTime: (e: ChangeEvent<HTMLInputElement>) => void;
  setAlarm: () => void;
  cancelAlarm: () => void;
  setTime__setButton: SerializedStyles;
};

const SetTimeComponet: React.FC<SetTimeComponetProps> = memo(
  ({ inputTime, getInputTime, setAlarm, cancelAlarm, setTime__setButton }) => {
    const setUp = useGlobal("setUp")[0];

    return (
      <React.Fragment>
        <h2 css={setTime__h2}>2. Set the time.</h2>
        <div css={setTime__formButtonBlock}>
          <input
            type="time"
            value={inputTime}
            css={setTime__inputForm}
            onChange={getInputTime}
            disabled={setUp ? true : false}
            aria-label="input time"
            data-testid="setTime"
          />
          <button
            onClick={setUp ? cancelAlarm : setAlarm}
            css={setTime__setButton}
          >
            {setUp ? "Cancel" : "Set"}
          </button>
        </div>
      </React.Fragment>
    );
  }
);

const setTime__formButtonBlock = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const setTime__h2 = css`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const setTime__inputForm = css`
  background-color: ${colors.white};
  color: ${colors.black};
  border: none;
  box-shadow: 0 2px 4px ${colors.white};
  border-radius: 5px;
  margin: 0 0.5rem;
  padding: 0 0.75rem;
  height: 2rem;
  font-family: "Arial Black", "Arial Rounded MT Bold", sans-serif;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 2px 6px ${colors.white};
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export default SetTimeComponet;
