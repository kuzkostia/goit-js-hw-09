const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let ID;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  ID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(ID);
});
