/** @jsx jsx */
import React from "reactn";
import { animated, TransitionFn } from "react-spring";
import { jsx, css } from "@emotion/core";
import SelectSoundSlider from "../containers/SelectSoundSlider";
import SetTime from "../containers/SetTime";
import Alarming from "../containers/Alarming";

type ClockComponentProps = {
  alarming: boolean;
  setAlarmTime: (value: string) => void;
  setAlarming: (value: boolean) => void;
  transition: TransitionFn<boolean, {}>;
  randomPosition: number[];
};

const ClockComponent: React.FC<ClockComponentProps> = ({
  alarming,
  setAlarmTime,
  setAlarming,
  transition,
  randomPosition
}) => {
  return (
    <React.Fragment>
      <div css={clock__content} data-testid="clock-content">
        <SelectSoundSlider />
      </div>
      <div css={clock__content}>
        <SetTime alarming={alarming} setAlarmTime={setAlarmTime} />
      </div>
      <h2 css={clock__sleep}>3. Let's sleep.</h2>
      {transition(
        (props, item) =>
          item && (
            <animated.div style={props}>
              <Alarming
                randomPosition={randomPosition}
                setAlarming={setAlarming}
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

export default ClockComponent;
