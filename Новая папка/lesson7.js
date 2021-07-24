let students = [ 
    { 
        firstName: 'Student1', 
        lastName: 'Surname1', 
        age: 25, 
        mark: [12,34,56,67,78,89], 
        course: 'JS', 
        id: 1, 
    }, 
    { 
        firstName: 'Student2', 
        lastName: 'Surname2', 
        age: 20, 
        mark: [45,76,23,86], 
        course: 'Design', 
        id: 2, 
    }, 
    { 
        firstName: 'Student3', 
        lastName: 'Surname3', 
        age: 55, 
        mark: [0,13,6,100,34,90], 
        course: 'JS', 
        id: 3, 
    }, 
    { 
        firstName: 'Student4', 
        lastName: 'Surname4', 
        age: 25, 
        mark: [12,34,56,67,78,89], 
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
 
// forEach 
// students.forEach(function(student, i) { 
//     console.log(student); 
// }); 
 
 
// filter 
let filteredStudents = students.filter(function(student) { 
    return student.course === 'JS'; 
});
console.log(filteredStudents);


// map
let studentsName = students.map(function (student) {
    return `${student.firstName} ${student.lastName}`;
});
console.log(studentsName);

// filter and map
let filteredJSStudents = students
.filter(function(student) { 
    return student.course === 'JS'; 
})
.map(function (student) {
    return `${student.firstName} ${student.lastName}`;
});
console.log(filteredJSStudents);

// короткая запись filter and map
let filteredJSStudents = students
.filter((student) => student.course === 'JS')
.map((student) => `${student.firstName} ${student.lastName}`);
console.log(filteredJSStudents);

// reduce

let arr = [1,2,3,4,5];
let sum = 0;

// старый способ
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

// через reduce
// sum - переменная, которая проходит через все итерации массива
// начальное значение sum = students[0] или значение переданное вторым аргументом в
// метод reduce

let sumAge = students.reduce(function(sum, student) {
    return sum += student.age;
}, 0);
console.log(sumAge);

// короткая запись
let sumAge = students.reduce((acc, arr) => acc += arr.age, 0);
console.log(sumAge);

// та же самая задача с filter and map только через reduce
let filteredJSStudents = students.reduce(function(arr, student) {
    if (student.course === 'JS') {
        arr.push(`${student.firstName} ${student.lastName}`);
    }
    return arr;
}, []);
console.log(filteredJSStudents);

let studentsObj = students.reduce(function(obj, student) {
    return {
        ...obj,
        [`${student.firstName} ${student.lastName}`]: student.age,
    };
}, {});
console.log(studentsObj);



