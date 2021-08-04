const canvas = document.querySelector('#canvas');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

const ctx = canvas.getContext('2d');
var dy = getRandomSpeed();
let rectSize = 20;
let rectColor = RandColor();
let x = getRandomInt(0, 640);
let y = 0;

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
// 
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function animate() {

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		updateRect();
		y += dy;
	}

	let rectArray = [];
	for (let i = 0; i < 2; ++i) {
		let newRect = {
			color: RandColor(),
			xPos: getRandomInt(0, 640),
			yPos: y,
		}
		rectArray.push(newRect);
		console.log(rectArray);
	}
	function updateRect() {
		rectArray.forEach(rect => {
			drawRect(rect.xPos, rect.yPos, rect.color)
		})
	}
	function drawRect(x, y, color) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.fillRect(x, y, 20, 20);
		ctx.fill();
		ctx.closePath();
	}

	if (y + dy > canvas.height - rectSize) {
		clearInterval(interval);
	}
	var interval = setInterval(updateRect, 10);
	stopButton.addEventListener('click', e => {
		clearInterval(interval);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});
	setInterval(draw, 10)
	requestAnimationFrame(animate);
}





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
