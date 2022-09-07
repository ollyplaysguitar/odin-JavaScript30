const playSound = function (e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
  document.querySelector(`div[data-key="${e.keyCode}"]`).classList.add("playing");
};

const removePlayingClass = function (e) {
  document.querySelector(`div[data-key="${e.keyCode}"]`)?.classList.remove("playing");
};

document.addEventListener("keydown", playSound);
document.addEventListener("keyup", removePlayingClass);
