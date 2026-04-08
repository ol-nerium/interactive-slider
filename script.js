const img = document.getElementsByTagName("img");
const rhythmBlocks = document.querySelectorAll(".rhythm");
const srcList = [];

let rhythmId = null;
let rhythmSpeed = 500;
let prevSpeed = 500;
let intervalTime = Math.ceil(Math.random() * 1000 + 500);

let index = 13;
function addSrc() {
  index = index > srcList.length - 2 ? 0 : +index + 1;

  let src = srcList[index];

  // let src = "./pics/" + srcList[Math.floor(Math.random() * srcList.length - 1)];
  // let src = srcList[Math.floor(Math.random() * srcList.length - 1)];
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
  rhythmBlocks[0].style.animation = `blink ${duration}ms infinite`;
  rhythmBlocks[1].style.animation = `blink ${duration}ms infinite`;
}

function stopButtonTextChange() {
  document.querySelector(".stop").textContent = !rhythmSpeed ? "go" : "stop";
}

addSrc();
