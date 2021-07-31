function getTime() {
    let date = new Date();
    let time = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)
        }: ${('0' + date.getSeconds()).slice(-2)} `;
    document.querySelector('h2').innerHTML = time;
};

function creatButton(text) {
    let button = document.createElement("button");
    const textButton = document.createTextNode(text);
    button.classList.add(text);
    button.appendChild(textButton);
    document.body.prepend(button);
}
let timerId;
let h2 = document.createElement('h2')
document.body.prepend(h2);
let button2 = creatButton('Stop');
let button1 = creatButton('Start');
document.querySelector('.Start').addEventListener('click', function () {
    timerId = setInterval(function () {
        getTime();
    }, 1000);
});
document.querySelector('.Stop').addEventListener('click', function () {
    clearInterval(timerId);
});





