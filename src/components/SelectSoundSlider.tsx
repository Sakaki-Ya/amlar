/** @jsx jsx */
import React /* , { FC } */ from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { jsx, css } from "@emotion/core";
import classic from "../assets/classic.svg";
import digital from "../assets/digital.svg";
import chicken from "../assets/chicken.svg";

const SelectSoundSlider = () => (
  <React.Fragment>
    <Slider {...settings}>
      <div id="classic">
        <img src={classic} alt="Classic Alarm Clock" css={soundIcon} />
        <p>Classic Alarm Clock</p>
      </div>
      <div id="digital">
        <img src={digital} alt="Digital Alarm Clock" css={soundIcon} />
        <p>Digital Alarm Clock</p>
      </div>
      <div id="chicken">
        <img src={chicken} alt="Chicken's Scream" css={soundIcon} />
        <p>Chicken's Scream</p>
      </div>
    </Slider>
    <button onClick={soundTest} css={sounds__test}>
      Sound Test
    </button>
  </React.Fragment>
);

const settings = {
  iadaptiveHeight: true
};

const soundTest = () => {
  const alarm = ["test", "digital", "chicken", "voice"];
  const alarmNumber: number = 0;
  const testSound = new Audio("../assets/" + alarm[alarmNumber] + ".mp3");
  testSound.pause();
  testSound.play();
};

const soundIcon = css`
  max-width: 120px;
  @media screen and (min-width: 480px) {
    max-width: 240px;
  }
  margin-bottom: 1em;
`;

const sounds__test = css`
  margin: 2em 0 1em 0;
`;

export default SelectSoundSlider;
