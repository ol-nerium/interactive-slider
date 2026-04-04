const img = document.getElementsByTagName("img");
const rhythmBlock = document.querySelector(".rhythm");
const srcList = [
  // list of filenames from pics dir
];
// console.log(src);

let rhythmId = null;
let rhythmSpeed = 500;
function addSrc() {
  let src = "./pics/" + srcList[Math.floor(Math.random() * srcList.length - 1)];
  img[0].attributes.src.nodeValue = src;
  img[1].attributes.src.nodeValue = src;
  const intervalTime = Math.ceil(Math.random() * 5000 + 800);
  setTimeout(addSrc, intervalTime);
  rhythmSpeed = rhythmSpeed <= 100 ? 100 : rhythmSpeed - 100;
  changeRhythm(rhythmSpeed);
}

const controls = document.querySelector(".controls");

console.log(controls);
controls.addEventListener("click", (evt) => {
  if (evt.target === controls) return;
  const controlType = evt.target.dataset.control;
  if (controlType === "slower") {
    rhythmSpeed += 100;
    changeRhythm(rhythmSpeed);
  }
  if (controlType === "stop") {
    rhythmSpeed = 0;
    changeRhythm(rhythmSpeed);
  }
  if (controlType === "faster") {
    rhythmSpeed = rhythmSpeed <= 100 ? 100 : rhythmSpeed - 100;
    changeRhythm(rhythmSpeed);
  }
});

function changeRhythm(duration) {
  console.log(duration);
  rhythmBlock.style.animation = `blink ${duration}ms linear infinite`;
}

addSrc();
