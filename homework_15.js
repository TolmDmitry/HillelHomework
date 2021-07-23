/*
1) Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(),
при вызове которого через 3 секунды в консоль выведется сообщение, записанное в свойстве message.
Начальный код:
*/

let coffeeMachine = {
    message: "Your coffee is ready!",
    start: function () {
        return setTimeout(() => console.log(this.message), 3 * 1000);
    },
};

coffeeMachine.start(); // 'Your coffee is ready!'

/*
Создайте объект teaPlease со свойством message: 'Wanna some tea instead of coffee?'.
Обновите методу start() контекст так, чтобы он выводил сообщение с нового объекта.
*/
let teaPlease = {
    message: "Wanna some tea instead of coffee?",
};
coffeeMachine.start.bind(teaPlease)(); // 'Wanna some tea instead of coffee?'

/*
2) Напишите функцию concatStr(), которая соединяет две строки, разделенные каким-то символом:
разделитель и строки передаются в параметрах функции. Используя привязку аргументов с помощью bind, 
создайте новую функцию hello(), которая которая выводит приветствие тому, кто передан в ее параметре:
*/

function concatStr(message, spacer, name) {
    return console.log(message + spacer + name);
}

let checkConcat = concatStr("Hello", " ", "Matt"); // 'Hello Matt'
let hello = concatStr.bind(name, "Hello", " ");
let finalResult = hello("Matt"); // 'Hello Matt'
finalResult = hello("John"); // 'Hello John'

/*
3) Напишите функцию showNumbers(), которая последовательно выводит в консоль числа в заданном диапазоне,
с заданным интервалом (все данные должны передаваться как параметры функции).
tips: для реализации используйте функцию setInterval()
*/

function showNumbers(numFirst, numLast, intervalTime) {
    let currentNum = numFirst;
    let timerId = setInterval(function () {
        console.log(currentNum);
        if (currentNum == numLast) {
            clearInterval(timerId);
        }
        currentNum++;
    }, intervalTime);
};
showNumbers(5, 10, 500); // 5 6 7 8 9 10

function showNumbersRecurssion(numFirst, numLast, intervalTime) {
    let currentNum = numFirst;
    setTimeout(function showNum() {
        console.log(currentNum);
        if (currentNum < numLast) {
            setTimeout(showNum, intervalTime)
        };
        currentNum++;
    }, intervalTime);
};
showNumbersRecurssion(5, 10, 500); // 5 6 7 8 9 10

/*
4) Какой результат выполнения будет у данного кода? Объяснить почему.
function addBase(base) {
  return function (num) {
    return base + num;
  };
}
let addOne = addBase(1);
alert(addOne(5) + addOne(3));
*/

// Ответ 
/*
Мы замкнули в функции addBase значение base = 1, вызовом функции addOne(5) мы передаем
во внутреннюю фунцию num = 5. Так как base = 1, addOne(5) возвращает 6, addOne(3) возврщает 4. И alert(addOne(5) + addOne(3)) возвращает 10;
*/