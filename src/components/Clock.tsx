/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, css, SerializedStyles } from "@emotion/core";
import SelectSoundSlider from "./SelectSoundSlider";

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const tick = (): void => {
    const date: Date = new Date();
    const hours: string = ("0" + date.getHours()).slice(-2);
    const minutes: string = ("0" + date.getMinutes()).slice(-2);
    const checkDate: string = hours + ":" + minutes;
    setDate(new Date());
    if (checkDate === time) {
      alert("Alarm");
    }
  };

  useEffect(() => {
    const timerID: NodeJS.Timeout = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  const getInputTime = (e: any) => {
    setTime(e.target.value);
  };

  return (
    <div css={clock}>
      <p>{date.toLocaleTimeString()}</p>
      <h2>1. Select Alarm Sound.</h2>
      <SelectSoundSlider />
      <h2>2. set time.</h2>
      <input type="time" css={clock__inputTime} onChange={getInputTime} />
      <h2>3. sleep.</h2>
    </div>
  );
};

const clock: SerializedStyles = css`
  box-sizing: border-box;
  max-width: 760px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 5%;
`;

const clock__inputTime: SerializedStyles = css`
  margin-bottom: 2em;
`;

export default Clock;
