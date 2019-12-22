let inputTime, // 入力時刻
  alarm = ["classic", "digital", "chicken", "voice"], // 目覚まし音
  alarmNumber = 0,
  alarmPlay = false; // アラーム発音中か否か

// 入力時刻取得
document.getElementById("setTime").onclick = () => {
  inputTime = document.getElementById("inputTime").value;
  if (!isNaN(inputTime)) {
    alert("please.");
    return;
  }
  const silent = new Audio("./sounds/silent.mp3");
  silent.loop = true;
  silent.play();

  // スライダー表示中の音番号取得
  $(function() {
    alarmNumber = $("#selectSound").slick("slickCurrentSlide");
  });

  // 入力時刻クリアボタン出現
  if (document.getElementById("clear") === null)
    document.getElementById("clearButon").innerHTML =
      '<button id="clear">Clear</button>';

  // 入力時刻クリアボタンイベント
  document.getElementById("clear").onclick = () => {
    document.getElementById("inputTime").value = null;
    if (document.getElementById("clear") !== null)
      document.getElementById("clear").remove();
    silent.pause();
  };
};

// 入力時刻と現在時刻の比較
const timer = () => {
  const date = new Date();
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = date.getSeconds();
  document.getElementById("viewTime").innerHTML =
    hours + ":" + minutes + ":" + seconds;
  if (alarmPlay === false && inputTime === hours + ":" + minutes) startAlarm();
};
setInterval(timer, 1000);

// アラーム発動
const startAlarm = () => {
  alarmPlay = true;
  alarm = new Audio("./sounds/" + alarm[alarmNumber] + ".mp3");
  alarm.loop = true;
  alarm.play();
  document.getElementById("clear").remove();

  // アラーム停止ボタン出現
  if (document.getElementById("stop") === null)
    document
      .getElementById("setTime")
      .insertAdjacentHTML("afterend", '<button id="stop">Stop</button>');

  // アラーム停止ボタンクリックイベント
  document.getElementById("stop").onclick = () => {
    inputTime = null;
    alarmPlay = false;
    alarm.pause();
    if (document.getElementById("stop") !== null)
      document.getElementById("stop").remove();
  };
};

//　サウンドテスト
document.getElementById("soundTestPlay").onclick = () => {
  $(function() {
    alarmNumber = $("#selectSound").slick("slickCurrentSlide");
  });
  soundTestPlay = new Audio("./sounds/" + alarm[alarmNumber] + ".mp3");
  soundTestPlay.play();
};
