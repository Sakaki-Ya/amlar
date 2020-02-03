/** @jsx jsx */
import React, { memo } from "react";
import { jsx, css } from "@emotion/core";
import colors from "./Colors";

type InputTimeProps = {
  inputTime: string;
  setInputTime: React.Dispatch<React.SetStateAction<string>>;
  afterSet: boolean;
  setAfterSet: React.Dispatch<React.SetStateAction<boolean>>;
  setAlarmTime: React.Dispatch<React.SetStateAction<string>>;
  silent: HTMLAudioElement;
};

const SetTime: React.FC<InputTimeProps> = memo(
  ({
    inputTime,
    setInputTime,
    afterSet,
    setAfterSet,
    setAlarmTime,
    silent
  }) => {
    const getInputTime = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.match(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/))
        setInputTime(e.target.value);
    };
    const setAlarm = () => {
      if (inputTime.match(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/)) {
        setAlarmTime(inputTime);
        setAfterSet(true);
        silent.loop = true;
        silent.play();
        return;
      }
      alert("Please enter a time.");
    };

    const cancelAlarm = () => {
      setAfterSet(false);
      setInputTime("");
      setAlarmTime("");
      silent.loop = false;
      silent.pause();
      silent.currentTime = 0;
    };

    const setTime__setButton = css`
      margin: 0 0.5rem;
      padding: 0.5rem 0.75rem;
      background-color: ${afterSet ? colors.lightBlue : colors.darkOrange};
      border: none;
      border-radius: 3px;
      white-space: nowrap;
      color: ${colors.white};
      font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      font-size: 1.25rem;
      font-weight: bold;
      box-shadow: 0 2px 4px ${colors.white};
      transition: 0.2s;
      &:hover {
        background-color: ${afterSet ? colors.moreLightBlue : colors.lightOrange};
        box-shadow: 0 2px 6px ${colors.white};
      }
      &:active {
        transform: translateY(2px);
        background-color: ${afterSet ? "#00274f" : colors.moreDarkOrange};
        color: ${colors.white};
        box-shadow: none;
      }
    `;

    return (
      <React.Fragment>
        <h2 css={setTime__h2}>2. Set the time.</h2>
        <div css={setTime__formButtonBlock}>
          <input
            type="time"
            value={inputTime}
            css={setTime__inputForm}
            onChange={getInputTime}
            disabled={afterSet ? true : false}
            aria-label="input time"
          />
          <button
            onClick={afterSet ? cancelAlarm : setAlarm}
            css={setTime__setButton}
          >
            {afterSet ? "Cancel" : "Set"}
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

export default SetTime;
