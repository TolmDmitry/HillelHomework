/*
1) Создайте 3 переменных со следующими значениями
*/

let string1 = "Aquamarine Black Blue Brown Chocolate ";
let string2 = "Green Lime Olive Orange Purple ";
let string3 = "Red Tomato Violet White Yellow";

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
    return string.split(' ').indexOf(element => element === color);
}

let greenIndex = indexColor(colors, 'Green'); // 38
console.log(greenIndex);
