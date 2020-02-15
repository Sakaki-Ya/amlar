import React, { useGlobal } from "reactn";
import { css } from "@emotion/core";
import SelectSoundSliderComponent from "../components/SelectSoundSlider";

const useSelectSoundSlider = () => {
  const sounds = [
    "classic",
    "digital",
    "chicken",
    "cuckoo",
    "bell",
    "laughter"
  ];
  const [sound, setSound] = useGlobal("sound");
  const setUp = useGlobal("setUp")[0];
  const settings = {
    afterChange: (currentIndexNum: number) => {
      sound.pause();
      sound.currentTime = 0;
      setSound(new Audio(sounds[currentIndexNum] + ".mp3"));
    },
    swipe: setUp ? false : true,
    arrows: setUp ? false : true
  };

  const soundPreview = () => {
    sound.pause();
    sound.currentTime = 0;
    sound.loop = false;
    sound.play();
  };

  const selectSound__slider = css`
    max-width: 240px;
    margin: auto;
    padding: 0 1rem;
    div p {
      overflow: visible;
      padding-bottom: 1rem;
    }
    opacity: ${setUp ? 0.5 : 1};
    transition: 0.2s;
  `;

  return { settings, soundPreview, selectSound__slider };
};

const SelectSoundSliderContainer = () => {
  const {
    settings,
    soundPreview,
    selectSound__slider
  } = useSelectSoundSlider();
  return (
    <SelectSoundSliderComponent
      settings={settings}
      soundPreview={soundPreview}
      selectSound__slider={selectSound__slider}
    />
  );
};

export default SelectSoundSliderContainer;
