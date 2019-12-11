/** @jsx jsx */
import React /* , { FC } */ from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jsx, css } from "@emotion/core";

const settings = {
  afterChange: (current: any) => console.log(current)
};

const soundTest = () => {
  const alarm = ["classic", "digital", "chicken", "voice"];
  const alarmNumber = 1;
  const testSound = new Audio(alarm[alarmNumber] + ".mp3");
  if (testSound.paused) {
    testSound.play();
    return;
  }
  testSound.pause();
  testSound.currentTime = 0;
  testSound.play();
};

const SelectSoundSlider = () => (
  <React.Fragment>
    <h2 css={sounds__h2}>Select Alarm Sound</h2>
    <div css={sounds}>
      <Slider {...settings}>
        <div id="classic">
          <img src="classic.svg" alt="Classic Alarm Clock" css={sounds__icon} />
          <p>Classic Alarm Clock</p>
        </div>
        <div id="digital">
          <img src="digital.svg" alt="Digital Alarm Clock" css={sounds__icon} />
          <p>Digital Alarm Clock</p>
        </div>
        <div id="chicken">
          <img src="chicken.svg" alt="Chicken's Scream" css={sounds__icon} />
          <p>Chicken's Scream</p>
        </div>
      </Slider>
    </div>
    <button onClick={soundTest} css={sounds__test}>
      Sound Test
    </button>
  </React.Fragment>
);

const sounds = css`
  max-width: 120px;
  @media screen and (min-width: 480px) {
    max-width: 240px;
  }
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const sounds__h2 = css`
  font-weight: bold;
  margin-bottom: 1em;
  width: 100%;
`;

const sounds__icon = css`
  width: 100%;
  margin-bottom: 1em;
`;

const sounds__test = css`
  margin: 2em 0 1em 0;
`;

export default SelectSoundSlider;
