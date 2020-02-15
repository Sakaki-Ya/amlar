import React, { memo, useState, useEffect, useGlobal } from "reactn";
import { css } from "@emotion/core";
import colors from "../components/Colors";
import SetTimeComponent from "../components/SetTime";

type useSetTimeProps = {
  alarming: boolean;
  setAlarmTime: (value: string) => void;
};

const useSetTime = ({ alarming, setAlarmTime }: useSetTimeProps) => {
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
  return { inputTime, getInputTime, setAlarm, cancelAlarm, setTime__setButton };
};

const SetTimeContainer: React.FC<useSetTimeProps> = memo(
  ({ alarming, setAlarmTime }) => {
    const {
      inputTime,
      getInputTime,
      setAlarm,
      cancelAlarm,
      setTime__setButton
    } = useSetTime({ alarming, setAlarmTime });

    return (
      <SetTimeComponent
        inputTime={inputTime}
        getInputTime={getInputTime}
        setAlarm={setAlarm}
        cancelAlarm={cancelAlarm}
        setTime__setButton={setTime__setButton}
      />
    );
  }
);

export default SetTimeContainer;
