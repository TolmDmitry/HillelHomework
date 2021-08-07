const canvas = document.querySelector("#canvas");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const scoreId = document.getElementById('score');
const ctx = canvas.getContext("2d");
let score = 0;
let interval;
let rectArray = [];


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min) + min;
}

function randColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function drawScore() {
  document.getElementById('score').textContent = score;
};

startButton.addEventListener("click", () => {
  interval = setInterval(() => {
    let newRect = {
      color: randColor(),
      xPos: Math.floor(getRandom(0, 640)),
      yPos: -30,
      width: 20,
      height: 20,
      speed: getRandom(3, 8) * 0.1,
    };
    rectArray.push(newRect);
  }, getRandom(200, 2000));
});

function animate() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateRect();
  drawScore();

  function updateRect() {
    rectArray.forEach((rect, index) => {
      drawRect(rect.xPos, rect.yPos, rect.color, rect.height, rect.width);
      if (rect.yPos > canvas.height) {
        console.log(rectArray.splice(index, 1));
      }
      console.log(rectArray)
      rect.yPos += rect.speed;
    });
  };

  function drawRect(x, y, color, height, width) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(x, y, height, width);
    ctx.fill();
    ctx.closePath();
  };
  requestAnimationFrame(animate);
};

stopButton.addEventListener("click", () => {
  score = 0;
  clearInterval(interval);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.location.reload();
});

canvas.addEventListener("click", (e) => {
  rectArray.forEach((rect, index) => {
    if (
      e.offsetX > rect.xPos &&
      e.offsetY > rect.yPos &&
      e.offsetX < rect.xPos + rect.width &&
      e.offsetY < rect.yPos + rect.height
    ) {
      rectArray.splice(index, 1);
      score++;
    }
  });
});
document.body.onload = animate;




