import React, { useState, useEffect, useGlobal } from "reactn";
import { useTransition, TransitionFn, config } from "react-spring";
import ClockComponent from "../components/Clock";

const silent = new Audio("silent.mp3");
let randomPosition = [0, 0];

const useClock = () => {
  document.title = "Amlar";

  const genRandomPosition = () => {
    let [maxRandomLeft, maxRandomTop] = [0, 0];
    if (window.screen.width > window.screen.height) {
      maxRandomLeft = 85;
      maxRandomTop = 16;
    } else {
      maxRandomLeft = 80;
      maxRandomTop = 50;
    }
    const [randomLeft, randomTop] = [
      Math.random() * (maxRandomLeft + 1),
      Math.random() * (maxRandomTop + 1)
    ];
    return [randomLeft, randomTop];
  };

  const [setUp, setSetUp] = useGlobal("setUp");
  useEffect(() => {
    if (setUp) {
      silent.loop = true;
      silent.play();
      return;
    }
    silent.loop = false;
    silent.pause();
    silent.currentTime = 0;
  }, [setUp]);

  const sound = useGlobal("sound")[0];
  const [alarming, setAlarming] = useState(false);
  const [alarmTime, setAlarmTime] = useState("");
  useEffect(() => {
    if (!setUp) return;
    const tick = () => {
      const date = new Date();
      const hours = ("0" + date.getHours()).slice(-2);
      const minutes = ("0" + date.getMinutes()).slice(-2);
      const currentTime = hours + ":" + minutes;
      if (currentTime !== alarmTime || alarming) return;
      sound.pause();
      sound.currentTime = 0;
      sound.loop = true;
      sound.play();
      randomPosition = genRandomPosition();
      setAlarming(true);
      silent.loop = false;
      silent.pause();
      silent.currentTime = 0;
    };
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  }, [alarmTime, alarming, setUp, sound]);
  useEffect(() => {
    if (alarming) return;
    sound.pause();
    sound.currentTime = 0;
    sound.loop = false;
    setAlarmTime("");
    setSetUp(false);
  }, [alarming, setSetUp, sound]);

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
  return { alarming, setAlarmTime, setAlarming, transition, randomPosition };
};

const ClockContainer: React.FC = () => {
  const {
    alarming,
    setAlarmTime,
    setAlarming,
    transition,
    randomPosition
  } = useClock();
  return (
    <ClockComponent
      alarming={alarming}
      setAlarmTime={setAlarmTime}
      setAlarming={setAlarming}
      transition={transition}
      randomPosition={randomPosition}
    />
  );
};

export default ClockContainer;
