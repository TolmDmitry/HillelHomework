const canvas = document.querySelector('#canvas');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

const ctx = canvas.getContext('2d');
// var y = canvas.height - 480;
// let x = Math.random() * 1000;
var dy = getRandomSpeed();
let rectSize = 20;
let rectColor = RandColor();
var rectArray = [];
x = getRandomInt(0, 640);
y = getRandomInt(0, 480);

function getRandomSpeed() {
	return Math.random() * 0.1;
}
function RandColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function animate() {
	function drawRect() {
		ctx.beginPath();
		ctx.fillRect(x, y, 20, 20);
		ctx.fillStyle = rectColor;
		ctx.fill();
		ctx.closePath();
	}
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawRect();
		y += dy;
		if (y + dy > canvas.height - rectSize) {
			clearInterval(interval); // Needed for Chrome to end game
		}
	}
	var interval = setInterval(draw, 10);

	stopButton.addEventListener('click', e => {
		clearInterval(interval);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});
	requestAnimationFrame(animate);
};




canvas.addEventListener("click", e => {
	console.log(`X and Y: ${e.offsetX}, ${e.offsetY}. `);
	if (e.offsetX === x && e.offsetY === y) {
		console.log('get')
	} else { console.log('near') };
	// if (e.offsetX < 100 && e.offsetX > 50 && e.offsetY > 50 && e.offsetY < 100) {
	// 	output.innerText += `Вы кликнули по красной фигуре!`;
	// 	output.style.color = 'red';
	// } else if (e.offsetX < 180 && e.offsetX > 100 && e.offsetY > 120 && e.offsetY < 170) {
	// 	output.innerText += `Вы кликнули по зеленой фигуре!`;
	// 	output.style.color = 'green';
	// } else {
	// 	output.style.color = 'black';
	// }
});
startButton.addEventListener('click', e => {
	animate();
});
