/*
1) Создайте 3 переменных со следующими значениями
*/

let string1 = 'Aquamarine Black Blue Brown Chocolate ';
let string2 = 'Green Lime Olive Orange Purple ';
let string3 = 'Red Tomato Violet White Yellow';

/*
а) Создайте функцию joinColor(), которая объединит все 3 строки в одну. Функция должна работать с любым количеством входящих строк.
*/

function joinColor(...arg) {
  return arg.join('');
}
let colors = joinColor(string1, string2, string3); // Aquamarine Black Blue Brown Chocolate Green Lime Olive Orange Purple Red Tomato Violet White Yellow
console.log(colors);

/*
b) Создайте функцию indexColor(), которая вернет
индекс первого вхождения входящей строки в строке. Функция принимает два параметра:
- строку, в которой будет поиск (например colors);
- строку, индекс которой, нужно будет найти
*/

function indexColor(string, color) {
  return string.indexOf(color);
}
let greenIndex = indexColor(colors, 'Green'); // 38
console.log(greenIndex);

/*
c) Создайте функцию isColorIncludes(), которая проверяет 
есть ли такой цвет в заданной строке. Обратите внимание, что функция должна работать с любыми регистром.
*/

function isColorIncludes(str, color) {
  return str.toLowerCase().includes(color.toLowerCase());
}
console.log(isColorIncludes(colors, 'Black')); // true
console.log(isColorIncludes(colors, 'BlAcK')); // true
console.log(isColorIncludes(colors, 'Lilac')); // false

/*
d) Создайте функцию replaceColor(), которая находит строку в заданной строке и изменяет ее на другую
*/

function replaceColor(str, substr, newSubstr) {
  return str.replace(substr, newSubstr);
}
let result = replaceColor(string2, 'Olive', 'Grey'); // "Green Lime Grey Orange Purple "
console.log(result);

/*
e) Создайте функцию splitColors(), 
которая разбивает входящую строку на отдельные слова и возвращает только те слова, которые больше 6ти символов.

upd: Обновите входящие параметры и саму функцию так,
чтобы условие проверки слов, можно было задавать динамически во время вызова самой функции.
*/

function splitColors(str, condition) {
  splitStr = str.split(' ');
  return splitStr.filter((element) => element.length > condition);
}
let filteredColors = splitColors(colors, 6); // "Aquamarine Chocolate"
console.log(filteredColors);

/*
f)* Создайте функцию calculateSpaces(), которая считает количетсво пробелов в строке.
*/

function calculateSpaces(str) {
  return str.split(' ').length - 1;
}
let count = calculateSpaces(string3); // 4
console.log(count);
