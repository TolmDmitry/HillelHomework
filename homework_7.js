/*
1) Напишите бесконечный цикл, который вызывает команду confirm()
 до тех пор пока пользователь не нажмет Отмена.
*/
while (confirm(''));

/*
2) Напишите программу, которая спрашивает у пользователя число и высчитывает факториал этого числа.
 Если пользователь ввел не целое число, запросите ввести число еще раз до тех пор 
 пока это число не будет введено.
*/

let factorial = 1;
let userNumber = '';
do {
    userNumber = prompt('Enter number for n!');
} while (!(Number.isInteger(Number(userNumber))) || (userNumber === ''));
while (userNumber > 1) {
    factorial *= userNumber;
    --userNumber;
}
console.log(factorial);

/*
3) Напишите программу, которая спрашивает у пользователя число и делит его на 2 столько раз,
пока оно не будет <= 50. Выведите в консоль число и количество операций,
которых потребовалось для этого сделать (тут можно не добавлять бесконечный цикл-проверку на число,
достаточно if/else).

Пример выполнения программы для number = 100500;
 */

let userNumber2 = Number(prompt('Enter number'));
let checkNumber = isNaN(userNumber2);
let counter = 0
if (userNumber2 <= 50 || checkNumber) {
    console.log('Wrong data');
} else {
    console.log(`Initial number is: ${userNumber2};`)
    while (userNumber2 >= 50) {
        userNumber2 = userNumber2 / 2;
        counter++;
    }
    console.log(`Attempts: ${counter};`);
    console.log(`Final number is: ${userNumber2};`);
}

