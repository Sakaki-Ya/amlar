/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, css, SerializedStyles } from "@emotion/core";
import SelectSoundSlider from "./SelectSoundSlider";
import colors from "./Colors";

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setDate(new Date());
    if (date === time) {
      alert("Alarm");
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  const getInputTime = (e: any) => {
    setTime(e.target.value);
  };

  const setInputTime = (e: any) => {
    console.log(time);
    e.preventDefault();
    const silent = new Audio("silent.mp3");
    silent.loop = true;
    silent.play();
  };

  return (
    <div css={clock}>
      <p>{date.toLocaleTimeString()}</p>
      <input type="time" css={clock__inputTime} onChange={getInputTime} />
      <SelectSoundSlider />
      <button css={clock__setTime} onClick={setInputTime}>
        Alarm Set
      </button>
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

const clock__setTime: SerializedStyles = css`
  background-color: ${colors.green};
  box-shadow: 0 2px 4px white;
  border: none;
  margin: 0 auto;
  padding: 0.5em 0.75em;
  border-radius: 5px;
  color: white;
  font-size: 1.15em;
  font-weight: bold;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: ${colors.lightGreen};
    box-shadow: 0 2px 6px white;
  }
  &:active {
    background-color: ${colors.deepGreen};
    box-shadow: none;
    transform: translateY(2px);
  }
`;

export default Clock;
