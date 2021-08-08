/*
1) Создайте объект student со свойствами firstName, lastName, averageScore и методами getFullName(), который возвращает полное имея
студента в виде строки ${firstName} ${lastName}, и isGrantHolder(). Метод isGrantHolder() должен содержать следующую логику:
Если averageScore больше или равняется числу 4, метод возвращает true, иначе - false.
Создайте функцию-конструктор Aspirant с прототипом student и свойствами dissertationTopic и isDissertationComplete.
Переопределите метод isGrantHolder() для Aspirant:
Если avarageScore больше или равняется числу 4.5 и значение isDissertationComplete равняется true, 
метод возвращает true , иначе - false .
Создайте объект aspirant используя функцию-конструктор Aspirant .
Используя цикл, выведите все свойства и методы объекта aspirant (включая свойства и методы прототипа).
Продемонстрируйте метод isGrantHolder() у объектов student и aspirant.
*/

function Student(name, surname, score) {
  this.firstName = name;
  this.lastName = surname;
  this.averageScore = score;
  this.isGrantHolder = () => this.averageScore >= 4;
  this.getFullName = () => this.firstName + ' ' + this.lastName;
}
let student = new Student('Ivan', 'Ivanov', 4.8);

function Aspirant(name, surname, score, topic, dissertationStatus) {
  Student.apply(this, [name, surname, score]);
  this.dissertationTopic = topic;
  this.isDissertationComplete = dissertationStatus;
  this.isGrantHolder = () => this.averageScore >= 4.5 && this.isDissertationComplete;
};

let aspirant = new Aspirant('John', 'Smith', 4.8, 'someTopic', false,);

for (property in aspirant) {
  console.log(property);
}

// averageScore: 4.8
console.log(student.isGrantHolder()); // true
// averageScore: 4.8, isDissertationComplete: false
console.log(aspirant.isGrantHolder()); // false


/*
2) Создайте класс Plane со свойствами name и isFlying (по-умолчанию false)
и методами takeOff() и land(). Метод takeOff() меняет значение свойства isFlying на true,
а метод land() меняет значение свойства isFlying на false.
Создайте объект airport со свойством planes (массив объектов класса Planes )
и методом getFlyingPlanes(), который вовзращающий количество элементов из
массива planes , у которых isFlying равняется true.
Cоздайте несколько объектов на основе класса Plane и добавьте их в массив
самолетов в airport. Измените любым объектам значение isFlying на true;
Продемонстрируйте метод getFlyingPlanes() в работе.
*/

class Plane {
  constructor(name, isFlying = false) {
    this.name = name;
    this.isFlying = isFlying;
  }
  takeOff() {
    return this.isFlying = true;
  };
  land() {
    return this.isFlying = false;
  }
}
let airport = {
  planes: [],
  getFlyingPlanes() {
    return this.planes.filter(plane => plane.isFlying).length
  }
}

let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
plane2.takeOff();
airport.planes.push(plane1, plane2);
console.log(airport.getFlyingPlanes());