/*
1) Создайте объект triangle со следующими свойствами: aSide, bSide, cSide.
Создайте метод setValues(), который вызывает функцию prompt и заполняет свойства aSide, bSide, cSide значениями.
Создайте в объекте triangle метод для расчета периметра треугольника.
Создайте в объекте triangle метод, который проверяет является ли треугольник
равносторонним:
Выведите информацию о созданном треугольнике (включая результат выполнения
всех методов) в консоль.
*/
/* Initial object */
let triangle = {
  aSide: 0,
  bSide: 0,
  cSide: 0,
  setValues: function () {
    this.aSide = +prompt("Enter a =");
    this.bSide = +prompt("Enter b =");
    this.cSide = +prompt("Enter c =");
  },
  validationValues: function () {
    if (isNaN(this.aSide) || this.aSide === 0) {
      return true;
    } else if (isNaN(this.bSide) || this.bSide === 0) {
      return true;
    } else if (isNaN(this.cSide) || this.cSide === 0) {
      return true;
    }
    return false;
  },

  getPerimeter: function () {
    if (this.validationValues()) {
      return "Error";
    }
    return this.aSide + this.bSide + this.cSide;
  },
  isEqualSides: function () {
    if (this.validationValues()) {
      return "Error";
    }
    return this.aSide === this.bSide && this.bSide === this.cSide;
  },
};

triangle.setValues(); // for examle 3 3 3
console.log(triangle.getPerimeter()); // 9
console.log(triangle.isEqualSides()); // true

/*
 2) Создайте объект calculator с методами:
-read() запрашивает prompt() для двух значений и сохраняет их как свойства объекта x, y
-sum() возвращает сумму этих двух значений
-multi() возвращает произведение этих двух значений
-diff() возвращает разницу
-div() возвращает частное
*/

let calculator = {
  read: function () {
    this.x = +prompt('Enter X=');
    this.y = +prompt('Enter Y=');
  },
  sum: function () {
    return this.x + this.y;
  },
  multi: function () {
    return this.x * this.y;
  },
  diff: function () {
    return this.x - this.y;
  },
  div: function () {
    return this.x / this.y;
  },
}
calculator.read(); // for example 5 2
console.log(calculator.sum()); // 7
console.log(calculator.diff()); // 3

/*
3)* Дан объект country и функция format():
*/

var country = {
  name: 'Ukraine',
  language: 'ukrainian',
  capital: {
    name: 'Kyiv',
    population: 2907817,
    area: 847.66
  }
};

function format(start, end) {
  console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(country.undefined, ['',]); // undefined

/*
4) Что выведет данный код на экран и почему?
*/

var text = 'outside';
function logIt() {
  console.log(text);
  var text = 'inside';
};
logIt();
//                                              ОТВЕТ
// Выводится undefined, при объявлении через var - переменная всплывает внутри функции, 
// но всплывает только объявление, то есть var text; соотвественно на моменте console.log(text) - переменная text = undefined, 
// а уже следующим шагом мы переменной text = 'inside';



/*
5) Напишите функцию flatArray, которая превращает массив в массиве в единый массив.
tips: вам поможет в этом метод reduce() c начальным значением [] и spread оператор.
*/

function flatArray(arr) {
  return arr.reduce((array, currentValue) => array += [...currentValue, ''], []);
};

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result = flatArray(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9] 
console.log(result);