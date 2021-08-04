const canvas = document.querySelector("#canvas");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const scoreId = document.getElementById('score');
const ctx = canvas.getContext("2d");
let x = getRandomInt(0, 640);
let y = 0;
let score = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function getRandomSpeed() {
  return Math.random() * 1.5;
};

function drawScore() {
  document.getElementById('score').textContent = `${score}`;
};

function animate() {
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateRect();
    drawScore();
  };

  function updateRect() {
    rectArray.forEach((rect) => {
      drawRect(rect.xPos, rect.yPos, rect.color, rect.height, rect.width);
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
  requestAnimationFrame(draw);
};

startButton.addEventListener("click", () => {
  var interval = setInterval(animate, 100);
  stopButton.addEventListener("click", () => {
    score = 0;
    clearInterval(interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.location.reload();
  });
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
      console.log(score)
    }
  });
});

let rectArray = [];
for (let i = 0; i < 30; ++i) {
  let newRect = {
    color: RandColor(),
    xPos: getRandomInt(0, 640),
    yPos: -30,
    width: 20,
    height: 20,
    speed: getRandomSpeed(),
  };
  rectArray.push(newRect);
}


