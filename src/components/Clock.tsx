/** @jsx jsx */
import { jsx, css, SerializedStyles } from "@emotion/core";
import SelectSoundSlider from "./SelectSoundSlider";
import colors from "./Colors";

// interface AppProps {
//   clock: number;
//   reset: () => void;
// }

const Clock = () => (
  <div css={clock}>
    <input type="time" id="inputTime" css={clock__inputTime} />
    <SelectSoundSlider />
    <input type="button" value="Alarm Set" css={clock__setTime} />
  </div>
);

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
  padding: 0.75em;
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
