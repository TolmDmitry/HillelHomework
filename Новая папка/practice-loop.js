//----------------------------------------------------------------------------------------//

/*
1) Напишите программу, которая спрашивает у пользователя число,
выводит на экран все числа от 1 и до этого числа 
и возводит в степерь 2 каждое ЧЕТНОЕ его число

Если number = 5; // returns 1 4 2 16 5
*/
let number = prompt('Enter number (1 task)');
console.log('task 1');
for (let i = 1; i <= number; i++) {
     if (!(i % 2)) {
          console.log(Math.pow(i, 2));
     } else {
          console.log(i);
     }
}
//----------------------------------------------------------------------------------------//
/*
2) Напишите программу, которая спрашивает у пользователя число
и выводит на экран ряд Фибоначи, который содержит в себе столько чисел,
сколько попросил ввести пользователь.

upd: Решить эту же задачу через цикл с пустым телом.
*/
let userNumber2 = +prompt('Enter number of fibonacci symbols (2 task)')
let previousNumber = 0;
let nextNumber = 1;
console.log('task 2');
console.log(previousNumber);
console.log(nextNumber);
for (let i = 0; i < userNumber2 - 2; i++) {
     let temporary = nextNumber;
     nextNumber = previousNumber + nextNumber;
     previousNumber = temporary;
     console.log(nextNumber);
}

///// решение с пустым телом цикла.

let userNumber2_1 = (+prompt('Enter number of fibonacci symbols (2_1 task)') - 2)
let previousNumber1 = 0;
let nextNumber1 = 1;
console.log('task 2_1');
console.log(previousNumber1);
console.log(nextNumber1);
while (userNumber2_1-- && (nextNumber1 = previousNumber1 + (previousNumber1 = nextNumber1))) {
     console.log(nextNumber1);
};

//----------------------------------------------------------------------------------------//
/*
3) Напишите программу, которая спрашивает у пользователя число
от 1 до 9 и выводит таблицу умножения для этого числа.

Если number = 5 // returns
1 x 5 = 5;
2 x 5 = 10;
2 x 5 = 15;
...
9 x 5 = 45;

upd: Вывести всю таблицу умножения одним циклом.
(для этого нужно воспользоваться возможностью запускать цикл внутри цикла).
*/

let userNumber = prompt('Enter number (3 task)');
console.log('task 3');
for (let i = 1; i < 10; i++) {
     console.log(`${i} * ${userNumber} = ${i * userNumber}`);
}
for (let j = 1; j < 10; j++) {
     console.log(`Multiplication tables for number ${j} :`);
     for (let i = 1; i < 10; i++) {
          console.log(`${i} * ${j} = ${i * j}`);
     }
}

//----------------------------------------------------------------------------------------//
/*
4) Напишите программу, которая спрашивает у пользователя два числа
1 - само число, 2 - степерь в которую его нужно возвести.
В консоль выведите результат возведения этого числа в степень.

Если 2 и 5 // returns 32
Если 4 и 10 // returns 1048576

upd: Вывести все степени введенного числа от 1 до 10.
*/

let userValuePow = prompt('Enter number (4 task)');
let userPow = prompt('Enter pow');
console.log('task 4');
console.log(`the value of ${userValuePow} to the power of ${userPow} = ${Math.pow(userValuePow, userPow)}`);

for (let i = 1; i <= 10; i++) {
     console.log(`${userValuePow} ^ ${i} = ${Math.pow(userValuePow, i)}`);
};

//----------------------------------------------------------------------------------------//
/*
5) Напишите програму, которая спрашивает у пользователя символ и выводит его 5 раз в консоль, увеличивая каждый раз на 1 их колличество.
(тут можно не делать никаких проверок на валидность, так как даже
если пользователь введет не 1 символ, а более - их все можно будет тоже
скопировать)

Если # // returns
#
##
###
####
#####

Если % // returns
%
%%
%%%
%%%%
%%%%%
*/

let userSymbol = prompt('Enter symbol (5 task)');
let resultSymbol = '';
console.log('task 5');
for (let i = 1; i <= 5; i++) {
     resultSymbol += userSymbol;
     console.log(resultSymbol);
}

//----------------------------------------------------------------------------------------//
/*
6) Дан массив [10, 20, 30, 50, 235, 3000]. Выведите в консоль только
те элементы, которые начинаются на 1, 2 и 5.

(Для этого вам пожет метод str1.startsWith(str2) для работы со строками и возвращает тип данных Boolean)
*/


let arr = [10, 20, 30, 50, 235, 3000];
console.log('task 6');
for (let value of arr) {
     let valueString = value.toString();
     if (valueString.startsWith(1) || valueString.startsWith(2) || valueString.startsWith(5)) {
          console.log(value);
     }
}

//----------------------------------------------------------------------------------------//
/*
7) Напишите программу, которая спрашивает у пользователя два числа
(min и max), создает массив из 10ти случайных элементов в диапазоне
от min и max и выводит в консоль среднее арифметическое этого массива.

tips:
 - Math.floor(Math.random() * (max - min) + min)
 - используйте цикл for для создания массива и поиска среднего арифметического числа.

*/


let userMin = +prompt('Enter minimum (7 task)');
let userMax = +prompt('Enter maximum (7 task)');
let userArray = new Array(10);
let sum = 0;
console.log('task 7');
Math.floor(Math.random() * (userMax - userMin) + userMin)
for (let i = 0; i < userArray.length; i++) {
     userArray[i] = Math.floor(Math.random() * (userMax - userMin + 1) + userMin);
     sum += userArray[i];
}
console.log(userArray);
console.log(`Average : ${sum / userArray.length}`);

//----------------------------------------------------------------------------------------//
/*
8) Напишите цикл, который заполнит строку value числами от 1000 до 2000
и добавьте к каждому числу символы &#. Результат проверьте в браузере,
запустим index.html файл

Формат ответа:
console.log(value); // &#1000 &#1001 &#1002 ... &#1999 &#2000

upd: проверьте код для значений от 7000 до 10000

*/


let result = document.getElementById('result');
let value = ''
for (let i = 7000; i < 10000; i++) {
     value += ' &#' + i;
     result.innerHTML = value;
}

//----------------------------------------------------------------------------------------//
/*
9) Напишите программу, которая спрашивает у пользователя положительное число и возвращает
его же в перевернутом виде.

Если number = 5678 // returns 8765
Если number = 8 // returns 8


upd: Обновите программу так, чтобы она работала и для отрицательных чисел

Если number = -98463 // returns -36489
*/


let userNumber9 = prompt('Enter number (9 task)');
let userNumberConversion = '';
console.log('task 9');
if (userNumber9[0] === '-') {
     for (let i = userNumber9.length - 1; i > 0; i--) {
          userNumberConversion += userNumber9[i];
     }
     console.log('-' + userNumberConversion);
} else {
     for (let i = userNumber9.length - 1; i >= 0; i--) {
          userNumberConversion += userNumber9[i];
     }
     console.log(userNumberConversion);
}

//----------------------------------------------------------------------------------------//

