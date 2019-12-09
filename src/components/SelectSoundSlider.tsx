/** @jsx jsx */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jsx, css } from "@emotion/core";

const SelectSoundSlider = () => {
  return (
    <div id="selectSound" css={sounds}>
      <Slider {...settings}>
        <div id="classic" css={sounds__txt}>
          &#x23f0; Classic Alarm Clock
        </div>
        <div id="digital" css={sounds__txt}>
          &#x1f50a; Digital Alarm Clock
        </div>
        <div id="chicken" css={sounds__txt}>
          &#x1f414; Chicken
        </div>
        <div id="voice" css={sounds__txt}>
          &#x1f444; Voice
        </div>
      </Slider>
      <button onClick={soundTest} css={sounds__test}>
        Sound Test
      </button>
    </div>
  );
};

const settings = {
  infinite: true
};

const soundTest = () => {
  const alarm = ["test", "digital", "chicken", "voice"];
  const alarmNumber: number = 1;
  const testSound = new Audio("static/sounds/" + alarm[alarmNumber] + ".mp3");
  testSound.play();
};

const sounds = css`
  margin: 1em 0;
  max-width: 240px;
  height: 2em;
`;

const sounds__txt = css`
  vertical-align: middle;
`;

const sounds__test = css`
  margin: 2em;
`;

export default SelectSoundSlider;
