/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import SelectSoundSlider from "./SelectSoundSlider";

const Clock = () => {
  return (
    <div css={clock}>
      <input type="time" id="inputTime" css={clock__inputTime} />
      <SelectSoundSlider />
      <input type="button" value="SET" id="setTime" />
      <div id="clearButon" />
    </div>
  );
};

const clock = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const clock__inputTime = css`
  max-width: 240px;
  width: 100%;
  margin-bottom: 2em;
`;

export default Clock;
