/*
1) Напишите функцию fillArray, которая создает массив и
 заполняет ее предоставленным значением.
*/

function fillArray() {
    let arr = [];
    arr.length = arguments[0];
    return arr.fill(arguments[1], 0, arguments[0]);
}
let array = fillArray(3, 'qwerty');
console.log(array);



// ******************************************************************************************* 
/*
2) Напишите функцию reverseArray, которая разворачивает
 значения массива задом наперед.
*/

function reverseArray() {
    return arguments[0].reverse();
}
let array2 = ['My', 'life', '-', 'my', 'rules'];
let result2 = reverseArray(array2);
console.log(result2);



// *******************************************************************************************
/*
 3) Напишите функцию filterArray, которая очищает массив от
 нежелательных значений (false, undefined, '', 0, null).
*/

let array3 = [0, 1, 2, null, undefined, 'qwerty', false];
console.log(array3);
let result3 = filterArray(array3);
console.log(result3);

function filterArray(arr) {
    return arr.filter(element => element);
}



// *******************************************************************************************
/*
4) Напишите функцию calcSum, которая вернет сумму всех входящих параметров функции.
*/

function calcSum(...arg) {
    return arg.reduce((a, b) => a + b, 0);
}
let sum1 = calcSum(0); // 0
let sum2 = calcSum(1, 2, 3); // 6
let sum3 = calcSum(5, 0, 10, 1, 5); // 21
console.log(sum1, sum2, sum3);


// *******************************************************************************************
/*
5) Напишите функцию changeFour, которая удаляет 4й элемент массива и заменяет его строкой 'JavaScript'
*/

let array5 = [1, 2, 3, 4, 5];
console.log(array5);
let result5 = changeFour(array5); // [1, 2, 3, 'JavaScript', 5];
function changeFour(arr) {
    return arr.splice(3, 1, 'JavaScript');
}
console.log(array5);


//***********************************************************************************************
/*
6) Напишите функцию formatArray, которая преобразует массив в строку через заданный входящий символ.
*/

let array6 = [1, 2, 3, 4, 5];
let result6 = formatArray(array6, '%'); // 1%2%3%4%5
console.log(result6);
function formatArray(arr) {
    return arr.join('%');
}

//*************************************************************************************************
/*
7)* Напишите функцию advancedFillArray, которая создает массив и заполняет ее
случайными значениями чисел из представленного диапазона. (Логику создания
случайного числа обернуть в фукнцию setRandomValue(min, max)).
*/

function advancedFillArray(length, min, max) {
    let randomArray = fillArray(length, setRandomValue(min, max));
    return randomArray.map(setRandomValue);
};
function setRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

console.log(advancedFillArray(10, 1, 15))
//*************************************************************************************************
/*
8)* Напишите функцию changeArray, которая каждый элемент входящего массива умножает на 8,
а возвращает только истинные значения (которые не равны NaN после результата умножения).
tips: тут вам функция filterArray поможет отфильтровать значения.
upd. Напишите функцию maxValue, которая для непустого массива возвращает его максимальное число.
upd.upd. Обновите функцию changeArray так, чтобы значения массивов, которые начинаются с чисел,
но содержат в себе символы тоже давали истинные значения при умножении на 8.
*/

let array8 = [1, 2, false, {}, undefined, '123', 'true'];
let result8 = changeArray(array8); // 8, 16, 984
let max8 = maxValue(result8); // 984

let array8_2 = [1, 2, false, '3px', '13.3%', '123', 'true'];
let result8_2 = changeArray(array8_2); // 8, 16, 24, 106.4, 984
let max8_2 = maxValue(result8_2); // 984

function changeArray(arr) {
    let parseArray = arr.map(numStr => parseFloat(numStr));
    return filterArray(parseArray.map(function(x) { return x * 8; }));
}
function maxValue(arr) {
    return Math.max.apply(Math,arr);
}

console.log(result8);
console.log(max8);
console.log(result8_2);
console.log(max8_2);