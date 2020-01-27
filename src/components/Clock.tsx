/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { useTransition, animated, TransitionFn, config } from "react-spring";
import { jsx, css } from "@emotion/core";
import SelectSoundSlider from "./SelectSoundSlider";
import SetTime from "./SetTime";
import Alarming from "./Alarming";

const silent = new Audio("silent.mp3");

const Clock: React.FC = () => {
  console.log("rendered Clock");
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

  const [inputTime, setInputTime] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [afterSet, setAfterSet] = useState(false);
  const [sound, setSound] = useState(new Audio("classic.mp3"));
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

  return (
    <React.Fragment>
      <div css={clock__content}>
        <SelectSoundSlider
          sound={sound}
          setSound={setSound}
          afterSet={afterSet}
        />
      </div>
      <div css={clock__content}>
        <SetTime
          inputTime={inputTime}
          setInputTime={setInputTime}
          afterSet={afterSet}
          setAfterSet={setAfterSet}
          setAlarmTime={setAlarmTime}
          silent={silent}
        />
      </div>
      <h2 css={clock__sleep}>3. Let's sleep.</h2>
      {transition(
        (props, item) =>
          item && (
            <animated.div style={props}>
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

const clock__sleep = css`
  font-size: 1.25rem;
`;

export default Clock;
