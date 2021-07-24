/*
1) Напишите программу, которая спрашивает у пользователя его имя 
и выводит в консоли текстовое поздравление.
Happy birthday to you
Happy birthday to you
Happy birthday, dear <name>
Happy birthday to you
Используйте любой цикл для реализации.
*/

let userName = prompt('What is your name?');
for (let i = 0; i <= 3; i++) {
    i == 2 ? console.log(`Happy birthday, dear ${userName}`) : console.log('Happy birthday to you');
};

/*
2) Сформируйте строку '.#.#.#.#.#.#.#' с помощью цикла for, 
где количество повторений символов '.#' задает пользователь 
через команду prompt().
*/
// let number = prompt('What is number of repetition?');
// let result = '';
// for (let i = 0; i < number; i++) {
//     result += '.#';
// }
// console.log(result);

/*
3) Напишите программу, котрая спрашивает у пользователя число
и суммирует все нечетные числа, до этого числа.
Если пользователь не ввел число, вызвать команду prompt()
c текстом "Invalid. You should enter a number" и
попросить его заново ввести число.
Результат отобразите в консоли.
*/

let userNumber = Number(prompt('Enter number'));
let sum = 0;
while ((typeof(userNumber)== 'number') || (userNumber === 0)) {
    userNumber = Number(prompt('Invalid. You should enter a number'));
    if (Number.isInteger(userNumber) === true) break;
}
for (let i = 0; i < userNumber; i++) {
    if (i % 2 != 0) {
        sum += i;;
    }
}
console.log(sum);

/*
4) Напишите бесконечный цикл, который прерывается при помощи команды break,
 когда Math.random() > 0.7. Выведите в консоль число, которое прерывает цикл
  и отобразите количество итераций цикла. Есл
*/

let numberAttempts = 0;
let randomNum = 0;
for (let i = 0; true; i++) {
    randomNum = Math.random();
    numberAttempts = i + 1;
    if (randomNum > 0.7) {
        break;
    }
}
console.log(`Loop was finished because of: ${randomNum}`);
console.log(`Number of attempts: ${numberAttempts}`);

/*
5) Напишите цикл от 1 до 50, в котором будет выводится поочередно числа от 1 до 50, при этом:
Если число делится на 3 без остатка, то выводить не это число, а слово 'Fizz';
Если число делится на 5 без остатка, то выводить не это число, а слово 'Buzz';
Если число делится и на 3 и на 5, то выводить не это число, а слово 'FizzBuzz';
*/

for (let i = 1; i <= 50; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }

    else console.log(i);
}