/** @jsx jsx */
import { jsx, css, SerializedStyles } from "@emotion/core";
import Colors from "./Colors";

interface AlarmingProps {
  sound: HTMLAudioElement;
  setAlarming: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alarming = ({ sound, setAlarming }: AlarmingProps): JSX.Element => {
  const stopAlarm = (): void => {
    console.log(sound);
    sound.pause();
    sound.currentTime = 0;
    setAlarming(false);
  };

  return (
    <div css={alarming}>
      <h2 css={alarming__h2}>Good Morning.</h2>
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
