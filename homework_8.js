/*
1)Напишите программу, которая продемонстрирует работу с массивом.
Создайте массив из восьми элементов:
Выведите информацию о типе каждого элемента в консоли.
Добавьте значение 6 к каждому элементу массива и выведите полученные значения
в консоли.
*/

let arr = [
    '455',
    87.15,
    true,
    undefined,
    null,
    'false',
    [],
    {},
];

for (let key of arr) {
    console.log(`${key} : ${typeof key}`);
};
for (let key of arr) {
    key = key + 6;
    console.log(key);
};

/*
2) Напишите программу, которая спрашивает у пользователя число 
и создает массив numbers из случайных целых чисел в диапазоне от 0 до 10,
длинною в число который указал пользователь.
Используйте методы Math.random() и Math.floor() для реализации.
Выведите содержимое массива numbers в консоли.
Скопируйте массив numbers в новый массив.
Каждый третий элемент нового массива умножте на 3.
Выведите содержимое нового массива в консоли.
 */

let numbers = [];
numbers.length = +prompt('Enter array length');

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.floor(Math.random(10) * 10);
}
console.log(numbers);

let numbersNewArrey = [...numbers];
console.log(numbersNewArrey);

for (let i = 2; i < numbersNewArrey.length;) {
    numbersNewArrey[i] = numbersNewArrey[i] * 3;
    i = i + 3;
}
console.log(numbersNewArrey);

/*
3) Создайте объект student1 со свойствами firstName, lastName и mark;
Скопируйте объект student1 в новый объект student2 с помощью spread оператора
и измените значение mark;
Скопируйте объект student1 в новый объект student3 с помощью Object.assign()
и измените значение mark;
Посчитайте среднюю оценку по группе (да из трех студентов, ну и что :D)
(Просто получить значения свойства mark у каждого студента через точку или [])
Выведите полученные результаты в консоль.
*/

let student1 = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    mark: 4,
};
let student2 = { ...student1 };
student2.mark = 5;
let student3 = Object.assign({}, student1)
student3.mark = 2;
let averageMark = (student1.mark + student2.mark + student3.mark) / 3;
console.log(`Mark student1 : ${student1.mark}; Mark student2 : ${student2.mark}; Mark student3 : ${student3.mark};`);
console.log(`Average Mark : ${averageMark}`);
