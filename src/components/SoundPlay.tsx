// import React from "react";

const SoundPlay = () => {
  const sounds = ["classic", "digital", "chicken"];
  const sound = new Audio(sounds[0] + ".mp3");

  const TestPlay = (props: number) => {
    sound.play();
  };

  const AlarmPlay = (props: number) => {
    sound.loop = true;
    sound.play();
  };
};

export default SoundPlay;
