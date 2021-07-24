/*
1) Добработайте массив students, с которым мы работали на уроке.
1.1) Добавьте в массив два новых объекта с такими же свойствами,
но с другими значениями.
1.2) Выведите в консоль массив студента(-ов), которых зовут 'Emily'.
1.3) Выведите в консоль объект студента, у которого id = 4.
1.4) Выведите в консоль массив фамилий студентов.
1.5)* Выведите в консоль массив студентов с новым свойством average,
которое отображает среднюю его оценку.
tips: тут нужно использовать метод map, чтобы обновить массив
и добавить новый ключ average объекту, и использовать
 метод reduce() для посчета суммы оценок mark.
upd: с помощью метода reduce() обновите полученный массив в подзадаче
1.5 в объект следующего вида:
*/

let students = [
    {
        firstName: 'Emily',
        lastName: 'Surname1',
        age: 25,
        mark: [12, 34, 56, 67, 78, 89],
        course: 'JS',
        id: 1,
    },
    {
        firstName: 'Student2',
        lastName: 'Surname2',
        age: 20,
        mark: [45, 76, 23, 86],
        course: 'Design',
        id: 2,
    },
    {
        firstName: 'Student3',
        lastName: 'Surname3',
        age: 55,
        mark: [0, 13, 6, 100, 34, 90],
        course: 'JS',
        id: 3,
    },
    {
        firstName: 'Student4',
        lastName: 'Surname4',
        age: 25,
        mark: [12, 34, 56, 67, 78, 89],
        course: 'Design',
        id: 4,
    },
    {
        firstName: 'Student5',
        lastName: 'Surname5',
        age: 18,
        mark: [100, 100, 100, 100, 100],
        course: 'PM',
        id: 5,
    }
];
let studentsLength = students.length;
console.log('length', studentsLength);
//1.1
students.push({
    firstName: 'Student6',
    lastName: 'Surname6',
    age: 25,
    mark: [54, 35, 43, 54, 35],
    course: 'PM',
    id: 6,
}, {
    firstName: 'Student7',
    lastName: 'Surname7',
    age: 34,
    mark: [40, 60, 34, 54, 21],
    course: 'JS',
    id: 7,
});
console.log(students);

//1.2
let filterEmily = students.filter(person => person.firstName === 'Emily');
console.log(filterEmily);

//1.3
let findStudent4 = students.find(index => index.id === 4);
console.log(findStudent4);

//1.4
let studentsSurname = students.map((student) => student.lastName);
console.log(studentsSurname);

// 1.5
let averegeMarks = students.map((student) => student.average = student.mark.reduce((acc, arr) => acc += arr, 0));
console.log(students);

let result = students.reduce(function (obj, student) {
    return {
        ...obj,
        [`${student.firstName} `]: student.average,
    };
}, {});
console.log(result);


/*
2) Создайте массив frameworks со значениями: ‘AngularJS’, ‘jQuery’
a. Добавьте в начало массива значение ‘Backbone.js’
b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
c. Добавьте в массив значение ‘CommonJS’ вторым элементом
d. Найдите и удалите из массива значение ‘jQuery’ и выведите его в консоль со словами “Это здесь лишнее”
*/

let frameworks = ['AngularJS', 'jQuery'];
console.log(frameworks);
frameworks.unshift('Backbone.js');
frameworks.push('ReactJS', 'Vue.js');
frameworks.splice(1, 0, 'CommonJS');
let jQueryValue = frameworks.splice(frameworks.findIndex(element => element === 'jQuery'), 1);
console.log(frameworks);
console.log(`${jQueryValue} - это здесь лишнее`);

/*
3) Создайте функцию removeNegativeElements, которая удаляет из входящего массива все негативные числа.
let result = removeNegativeElements([-9, 2, 3, 0, -28, 'value']); // [2, 3, 0, 'value'];
let result = removeNegativeElements([-9, -21, -12]; // []
let result = removeNegativeElements(['-102', 102]); // ['-102', 102]
*/

function removeNegativeElements(arr) {
    let positivNumber = arr.filter(element => element < 0);
    let result3 = arr.splice(positivNumber,) 
    console.log(positivNumber);
    console.log(result3);
}
console.log(removeNegativeElements([-9, 2, 3, 0, -28, 'value']));


