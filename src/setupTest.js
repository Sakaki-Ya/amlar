import { setGlobal } from "reactn";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  };

setGlobal({
  sound: new Audio("classic.mp3"),
  setUp: false,
  page: "top",
});

window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};
window.alert = () => {};
