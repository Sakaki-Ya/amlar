/** @jsx jsx */
import React, { useState, Dispatch, SetStateAction } from "react";
import { jsx, css, SerializedStyles } from "@emotion/core";
import Colors from "./Colors";

let startLatitude: number = 0,
  startLongitude = 0;

const getStart = (pos: any): void => {
  startLatitude = pos.coords.latitude;
  startLongitude = pos.coords.longitude;
};
const getStartError = (error: { code: number }): void => {
  switch (error.code) {
    case 1:
      alert("Use of location information is not allowed.");
      break;
    case 2:
      alert("Unable to determine device location.");
      break;
    case 3:
      alert("Timed out.");
      break;
  }
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getStart, getStartError);
} else {
  alert("Your device cannot use this application.");
}
interface AlarmingProps {
  sound: HTMLAudioElement;
  setAlarming: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alarming = ({ sound, setAlarming }: AlarmingProps): JSX.Element => {
  navigator.geolocation.getCurrentPosition(getStart, getStartError);

  const [latitude, setLatitude]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(startLatitude);
  const [longitude, setLongitude]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(startLongitude);
  const watchId: number = navigator.geolocation.watchPosition(
    (pos: any) => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    },
    () => alert("An unexpected error has occurred."),
    {
      enableHighAccuracy: true,
      timeout: 1000,
      maximumAge: Infinity
    }
  );

  const stopAlarm = (): void => {
    sound.loop = false;
    sound.pause();
    sound.currentTime = 0;
    setAlarming(false);
    navigator.geolocation.clearWatch(watchId);
  };

  return (
    <div css={alarming}>
      <h2 css={alarming__h2}>Good Morning.</h2>
      <p>スタート緯度 {startLatitude}</p>
      <p>スタート経度 {startLongitude}</p>
      <p>緯度 {latitude}</p>
      <p>経度 {longitude}</p>
      <button onClick={stopAlarm} css={alarming__stop}>
        Stop Alarm
      </button>
    </div>
  );
};

const alarming: SerializedStyles = css`
  background-color: ${Colors.white};
  color: ${Colors.black};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const alarming__h2: SerializedStyles = css`
  font-size: 1.25em;
  margin-bottom: 1em;
`;

const alarming__stop: SerializedStyles = css`
  text-decoration: none;
  margin: 0 auto 2em auto;
  padding: 0.5em 0.75em;
  background-color: ${Colors.orange};
  border: none;
  border-radius: 3px;
  white-space: nowrap;
  color: ${Colors.white};
  font-weight: bold;
  box-shadow: 0 2px 6px ${Colors.black};
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: ${Colors.lightOrange};
    box-shadow: 0 2px 6px ${Colors.white};
  }
  &:active {
    transform: translateY(2px);
    background-color: ${Colors.deepOrange};
    color: ${Colors.white};
    box-shadow: none;
  }
`;

export default Alarming;
