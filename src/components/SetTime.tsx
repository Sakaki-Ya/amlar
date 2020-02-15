/** @jsx jsx */
import React, { memo, useState, useEffect, useGlobal } from "reactn";
import { jsx, css } from "@emotion/core";
import colors from "./Colors";

type SetTimeProps = {
  alarming: boolean;
  setAlarmTime: React.Dispatch<React.SetStateAction<string>>;
};

const SetTime: React.FC<SetTimeProps> = memo(({ alarming, setAlarmTime }) => {
  const [inputTime, setInputTime] = useState("");
  useEffect(() => {
    setInputTime("");
  }, [alarming]);
  const getInputTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/))
      setInputTime(e.target.value);
  };
  const [setUp, setSetUp] = useGlobal("setUp");
  const setAlarm = () => {
    if (inputTime.match(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/)) {
      setAlarmTime(inputTime);
      setSetUp(true);
      return;
    }
    alert("Please enter a time.");
  };

  const cancelAlarm = () => {
    setSetUp(false);
    setInputTime("");
    setAlarmTime("");
  };

  const setTime__setButton = css`
    margin: 0 0.5rem;
    padding: 0.5rem 0.75rem;
    background-color: ${setUp ? colors.lightBlue : colors.darkOrange};
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
      background-color: ${setUp ? colors.moreLightBlue : colors.lightOrange};
      box-shadow: 0 2px 6px ${colors.white};
    }
    &:active {
      transform: translateY(2px);
      background-color: ${setUp ? "#00274f" : colors.moreDarkOrange};
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
});

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
