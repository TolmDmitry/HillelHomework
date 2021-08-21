import { time, logSomeData } from './text-export';
import Student from './text-export-default';

const obj = {
    width: 10,
    height: 10,
};

console.log(obj);
logSomeData(time);

let student1 = new Student('Bob', 'Marley', 99);
let student2 = new Student('Alina', 'Malina', 18);

console.log(student1.getName());
console.log(student2.getName());