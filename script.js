const img = document.getElementsByTagName("img");
const rhythmBlock = document.querySelector(".rhythm");
const srcList = [];

let rhythmId = null;
let rhythmSpeed = 500;
let prevSpeed = 500;
let intervalTime = Math.ceil(Math.random() * 5000 + 1000);

function addSrc() {
  let src = "./pics/" + srcList[Math.floor(Math.random() * srcList.length - 1)];
  img[0].attributes.src.nodeValue = src;
  img[1].attributes.src.nodeValue = src;
  if (intervalTime) setTimeout(addSrc, intervalTime);
  if (rhythmSpeed) rhythmSpeed = rhythmSpeed <= 200 ? 200 : rhythmSpeed - 15;

  changeRhythm(rhythmSpeed);
}

const controls = document.querySelector(".controls");

controls.addEventListener("click", (evt) => {
  if (evt.target === controls) return;
  const controlType = evt.target.dataset.control;

  if (controlType === "slower") {
    if (!rhythmSpeed) {
      rhythmSpeed = prevSpeed;
    } else rhythmSpeed += 100;
    changeRhythm(rhythmSpeed);
  }

  if (controlType === "stop") {
    if (!rhythmSpeed) {
      rhythmSpeed = prevSpeed;
    } else {
      prevSpeed = rhythmSpeed;
      rhythmSpeed = 0;
    }
    changeRhythm(rhythmSpeed);
  }

  if (controlType === "faster") {
    if (!rhythmSpeed) {
      rhythmSpeed = prevSpeed;
    } else rhythmSpeed = rhythmSpeed <= 200 ? 200 : rhythmSpeed - 100;
    changeRhythm(rhythmSpeed);
  }

  stopButtonTextChange();
});

function changeRhythm(duration) {
  rhythmBlock.style.animation = `blink ${duration}ms infinite`;
}

function stopButtonTextChange() {
  document.querySelector(".stop").textContent = !rhythmSpeed ? "go" : "stop";
}

addSrc();
