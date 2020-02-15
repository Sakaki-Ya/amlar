import React, { useState, memo } from "react";
import { useTransition, config } from "react-spring";
import { css } from "@emotion/core";
import colors from "../components/Colors";
import AlarmingComponent from "../components/Alarming";

type useAlarmingProps = {
  randomPosition: number[];
  setAlarming: (value: boolean) => void;
};

const useAlarming = ({ randomPosition, setAlarming }: useAlarmingProps) => {
  const [randomLeft, randomTop] = randomPosition;
  const alarming__stop = css`
    left: ${randomLeft}%;
    top: ${randomTop}%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    padding: 0;
    width: 60px;
    height: 60px;
    background: ${colors.orange};
    box-shadow: 0 2px 4px ${colors.darkOrange};
    color: ${colors.white};
    font-size: 1.1rem;
    font-weight: bold;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    &:hover {
      background-color: ${colors.lightOrange};
      box-shadow: 0 2px 6px ${colors.orange};
      transition: 0.2s;
    }
    &:active {
      background-color: ${colors.white};
      color: ${colors.orange};
      box-shadow: none;
      transition: 1.5s;
    }
    animation: stopButton 0.2s;
    @keyframes stopButton {
      0% {
        transform: scale(1.2);
      }
      50% {
        transform: scale(0.5);
      }
      75% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  const [rendered, setRendered] = useState(false);
  const [hold, setHold] = useState(false);
  const transition = useTransition(hold, {
    config: config.slow,
    from: { opacity: 0, transform: "translateY(100vh)" },
    enter: {
      opacity: 1,
      transform: "translateY(0)",
      position: "fixed",
      top: 0,
      left: 0
    },
    leave: { opacity: 0, transform: "translateY(100vh)" },
    onRest: () => {
      if (hold) setAlarming(false);
      setRendered(true);
    }
  });

  return { rendered, setHold, transition, alarming__stop };
};

const AlarmingContainer: React.StatelessComponent<useAlarmingProps> = memo(
  ({ randomPosition, setAlarming }) => {
    const { rendered, setHold, transition, alarming__stop } = useAlarming({
      randomPosition,
      setAlarming
    });
    return (
      <AlarmingComponent
        rendered={rendered}
        setHold={setHold}
        transition={transition}
        alarming__stop={alarming__stop}
      />
    );
  }
);

export default AlarmingContainer;
