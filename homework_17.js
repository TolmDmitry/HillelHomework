/*
1) Создайте объект vegetable, с такими свойствами,
 чтобы cледующий код вернул "onions are usually white".
*/
let vegetable = { name: "onion", color: "white" };
const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`);
/*
2) Добавьте свойства в объект vegetable так, чтобы в консоль вывелось "onions are usually round".
*/
vegetable.shape = 'round';
const { shape } = vegetable;
console.log(`${name}s are usually ${shape}`);

/*
3) Создайте массив объектов vegetables 
(каждый элемент массива имеет содержит точно такую же структуру как объект vegetable) так,
чтобы следущий код вернул "cucumbers are usually green", "tomatos are usually red"
*/


let vegetables = [{ ...vegetable }, { ...vegetable }];
vegetables[0].name = 'cucumber';
vegetables[0].color = 'green';
vegetables[1].name = 'tomato'
vegetables[1].color = 'red';

const [cucumber, tomato] = vegetables;
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomato.name}s are usually ${tomato.color}`);

/*
4) Используя деструктуризацию можно разбить массив на необходимые части.
Например записать в переменную отдельно объект onion, и остальные овощи в новый массив.

Или же обращаться к любому элементу массива, пропуская предыдущие.

Используя примеры выше, создайте следующий массив объектов, выведите 2й элемент массива и длинну массива оставшихся элементов.
*/

let students = [
    { name: 'Kate', age: 25 },
    { name: 'Artur', age: 30 },
    { name: 'Nick', age: 15 },
    { name: 'Alex', age: 28 },
    { name: 'Zhenia', age: 45 },
];
const [, secondStudent, ...otherStudents] = students;
console.log(secondStudent);
console.log(otherStudents.length);

