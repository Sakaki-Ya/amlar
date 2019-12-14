/** @jsx jsx */
import React /* , { FC } */ from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jsx, css, SerializedStyles } from "@emotion/core";
import colors from "./Colors";

const alarm: string[] = ["classic", "digital", "chicken" /* , "voice" */];
let alarmTest: HTMLAudioElement = new Audio(alarm[0] + ".mp3");

const settings = {
  afterChange: (current: number) => {
    alarmTest.pause();
    alarmTest.currentTime = 0;
    alarmTest = new Audio(alarm[current] + ".mp3");
  }
};

const soundTest = (): void => {
  alarmTest.pause();
  alarmTest.currentTime = 0;
  alarmTest.play();
};

const SelectSoundSlider: React.FC = () => (
  <React.Fragment>
    <h2 css={sounds__h2}>Select Alarm Sound</h2>
    <Slider {...settings} css={sounds}>
      <div>
        <img src="classic.svg" alt="Classic Alarm Clock" css={sounds__icon} />
        <p>Classic Alarm Clock</p>
      </div>
      <div>
        <img src="digital.svg" alt="Digital Alarm Clock" css={sounds__icon} />
        <p>Digital Alarm Clock</p>
      </div>
      <div>
        <img src="chicken.svg" alt="Chicken's Scream" css={sounds__icon} />
        <p>Chicken Shout</p>
      </div>
    </Slider>
    <button onClick={soundTest} css={sounds__test}>
      <p>&#x25b6; Alarm Test</p>
    </button>
  </React.Fragment>
);

const sounds: SerializedStyles = css`
  max-width: 120px;
  @media screen and (min-width: 480px) {
    max-width: 240px;
  }
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  margin: auto;

  div p {
    padding-bottom: 1em;
    overflow: visible;
  }
`;

const sounds__h2: SerializedStyles = css`
  margin-bottom: 1em;
  width: 100%;
  color: ${colors.yellow};
  font-weight: bold;
  font-size: 1.25em;
`;

const sounds__icon: SerializedStyles = css`
  width: 100%;
  margin-bottom: 1em;
`;

const sounds__test: SerializedStyles = css`
  margin: 0 auto 2em auto;
  background-color: transparent;
  border: 0;
  white-space: nowrap;
  color: ${colors.yellow};
  font-weight: bold;
  transition: all 0.2s ease 0s;
  &:hover {
    color: ${colors.lightYellow};
  }
  &:active {
    color: ${colors.deepYellow};
  }
`;

export default SelectSoundSlider;
