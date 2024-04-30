const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");

console.log(startBtn);
console.log(stopBtn);
console.log(body);
let timerId = null;
stopBtn.setAttribute('disabled', '');

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }, 1000);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

stopBtn.addEventListener("click", () => {
    clearInterval(timerId)
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

