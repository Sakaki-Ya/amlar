/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, css, SerializedStyles } from "@emotion/core";
import Colors from "./Colors";

interface AlarmingProps {
  sound: HTMLAudioElement;
  setAlarming: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alarming = ({ sound, setAlarming }: AlarmingProps): JSX.Element => {
  const [hold, setHold]: [boolean, any] = useState(false);
  const [count, setCount]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);
  useEffect(() => {
    if (hold === false) return;
    const countUp = (): void => {
      setCount(count + 1);
      if (count === 1) {
        sound.loop = false;
        sound.pause();
        sound.currentTime = 0;
        setAlarming(false);
      }
    };
    const timer: NodeJS.Timeout = setInterval((): void => countUp(), 1000);
    return (): void => clearInterval(timer);
  }, [count, hold, setAlarming, sound]);

  const holdDown = (): void => {
    setHold(true);
  };
  const endHold = (): void => {
    setHold(false);
    setCount(0);
  };

  return (
    <div css={alarming}>
      <h2 css={alarming__h2}>Good Morning.</h2>
      <button
        onMouseDown={holdDown}
        onMouseUp={endHold}
        onContextMenu={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
        }}
        css={alarming__stop}
      >
        Stop
      </button>
    </div>
  );
};

const alarming: SerializedStyles = css`
  background: linear-gradient(180deg, #ffffff, #f0ece3);
  color: ${Colors.black};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const alarming__h2: SerializedStyles = css`
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 1.25em;
  font-weight: bold;
  margin: 2em auto;
`;

const alarming__stop: SerializedStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  height: 4em;
  margin: auto;
  padding: 1.25em;
  background-color: ${Colors.blue};
  border: none;
  border-radius: 50%;
  white-space: nowrap;
  color: ${Colors.white};
  font-size: 1.25em;
  font-weight: bold;
  box-shadow: 0 2px 6px ${Colors.black};
  user-select: none;
  -webkit-touch-callout: none;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: ${Colors.lightBlue};
    box-shadow: 0 2px 6px ${Colors.black};
  }
  &:active {
    background-color: transparent;
    border: 4px solid ${Colors.blue};
    color: ${Colors.blue};
    box-shadow: none;
  }
`;

export default Alarming;
