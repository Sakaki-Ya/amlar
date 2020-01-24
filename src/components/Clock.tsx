/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { useTransition, animated, TransitionFn, config } from "react-spring";
import { jsx, css } from "@emotion/core";
import colors from "./Colors";
import SelectSoundSlider from "./SelectSoundSlider";
import Alarming from "./Alarming";

const silent = new Audio("silent.mp3");

const Clock: React.FC = () => {
  const [inputTime, setInputTime] = useState("");
  const getInputTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/))
      setInputTime(e.target.value);
  };

  const [alarmTime, setAlarmTime] = useState("");
  const [afterSet, setAfterSet] = useState(false);
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

  const [sound, setSound] = useState(new Audio("classic.mp3"));
  const soundPreview = () => {
    sound.pause();
    sound.currentTime = 0;
    sound.loop = false;
    sound.play();
  };

  const randomPosition = () => {
    let [maxRandomLeft, maxRandomTop] = [0, 0];
    if (window.screen.width > window.screen.height) {
      maxRandomLeft = 85;
      maxRandomTop = 16;
    } else {
      maxRandomLeft = 80;
      maxRandomTop = 55;
    }
    const [randomLeft, randomTop] = [
      Math.random() * (maxRandomLeft + 1),
      Math.random() * (maxRandomTop + 1)
    ];
    return [randomLeft, randomTop];
  };

  const [position, setPosition] = useState([0, 0]);
  const [alarming, setAlarming] = useState(false);
  useEffect(() => {
    const tick = () => {
      const date = new Date();
      const hours = ("0" + date.getHours()).slice(-2);
      const minutes = ("0" + date.getMinutes()).slice(-2);
      const currentTime = hours + ":" + minutes;
      if (currentTime === alarmTime && !alarming) {
        sound.pause();
        sound.currentTime = 0;
        sound.loop = true;
        sound.play();
        setPosition(randomPosition());
        setAlarming(true);
        setAlarmTime("");
        silent.loop = false;
        silent.pause();
        silent.currentTime = 0;
      }
    };
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  }, [alarming, sound, alarmTime]);

  const transition: TransitionFn<boolean, {}> = useTransition(alarming, {
    config: config.default,
    from: { opacity: 0, transform: "translateY(100vh)" },
    enter: {
      opacity: 1,
      transform: "translateY(0)",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1
    },
    leave: { opacity: 0, transform: "translateY(100vh)" }
  });

  const clock__set = css`
    margin: 0 0.5rem;
    padding: 0.5rem 0.75rem;
    background-color: ${afterSet ? colors.blue : colors.orange};
    border: none;
    border-radius: 3px;
    white-space: nowrap;
    color: ${colors.white};
    font-size: 1.25rem;
    font-weight: bold;
    box-shadow: 0 2px 4px ${colors.white};
    transition: 0.2s;
    &:hover {
      background-color: ${afterSet ? colors.lightBlue : colors.lightOrange};
      box-shadow: 0 2px 6px ${colors.white};
    }
    &:active {
      transform: translateY(2px);
      background-color: ${afterSet ? "#00274f" : colors.darkOrange};
      color: ${colors.white};
      box-shadow: none;
    }
  `;

  return (
    <React.Fragment>
      <div css={clock__content}>
        <h2 css={clock__h2}>1. Select an alarm sound.</h2>
        <SelectSoundSlider
          sound={sound}
          setSound={setSound}
          afterSet={afterSet}
        />
        <button
          onClick={soundPreview}
          css={clock__preview}
          disabled={afterSet ? true : false}
        >
          &#x25b6; Preview
        </button>
      </div>
      <div css={clock__content}>
        <h2 css={clock__h2}>2. Set the time.</h2>
        <div css={clock__timeBlock}>
          <input
            type="time"
            value={inputTime}
            css={clock__inputTime}
            onChange={getInputTime}
            required
            pattern="[0-9]{2}:[0-9]{2}"
            disabled={afterSet ? true : false}
          />
          <button onClick={afterSet ? cancelAlarm : setAlarm} css={clock__set}>
            {afterSet ? "Cancel" : "Set"}
          </button>
        </div>
      </div>
      <h2 css={clock__sleep}>3. Let's sleep.</h2>
      {transition(
        (style, item) =>
          item && (
            <animated.div style={style}>
              <Alarming
                sound={sound}
                position={position}
                setInputTime={setInputTime}
                setAlarming={setAlarming}
                setAfterSet={setAfterSet}
              />
            </animated.div>
          )
      )}
    </React.Fragment>
  );
};

const clock__content = css`
  margin-bottom: 3rem;
`;

const clock__h2 = css`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const clock__preview = css`
  background: transparent;
  border: none;
  color: ${colors.moreLightOrange};
  font-size: 1.25rem;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    color: ${colors.mostLightOrange};
  }
  &:active {
    color: ${colors.orange};
    transform: translateY(2px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const clock__timeBlock = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const clock__inputTime = css`
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

const clock__sleep = css`
  font-size: 1.25rem;
`;

export default Clock;
