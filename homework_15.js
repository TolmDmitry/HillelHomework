/*
1) Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(),
при вызове которого через 3 секунды в консоль выведется сообщение, записанное в свойстве message.
Начальный код:
*/

let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function () {
        return setTimeout(() => console.log(this.message), 2 * 1000);
    },
}

coffeeMachine.start(); // 'Your coffee is ready!'

/*
Создайте объект teaPlease со свойством message: 'Wanna some tea instead of coffee?'.
Обновите методу start() контекст так, чтобы он выводил сообщение с нового объекта.
*/
let teaPlease = {
    message: 'Wanna some tea instead of coffee?',
}
coffeeMachine.start.bind(teaPlease)(); // 'Wanna some tea instead of coffee?'


/*
2) Напишите функцию concatStr(), которая соединяет две строки, разделенные каким-то символом:
разделитель и строки передаются в параметрах функции. Используя привязку аргументов с помощью bind, 
создайте новую функцию hello(), которая которая выводит приветствие тому, кто передан в ее параметре:
*/

function concatStr(message, spacer, name) {
    resultStr = message + spacer + name;
    return resultStr;
};

let checkConcat = concatStr('Hello', ' ', 'Matt'); // 'Hello Matt'

function hello(fn, ) {

    return console.log(concatStr.bind());
};
let finalResult = hello('Matt') // 'Hello Matt'
finalResult = hello('John') // 'Hello John'