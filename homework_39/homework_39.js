// 1) Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром.

const arr = ['Vasya', 'Petya', 'Alexey']
function removeUser(array, index) {
  array.splice(index, 1);
};
removeUser(arr, 1);
console.log('TASK 1:', arr) /// ['Vasya', 'Alexey']

//2) Создайте класс Candidate который будет принимать параметром объект из массива condidateArr.
//Добавить метод с именем state который вернет штат в котором живет наш кандидат.
//Информация о штате находится в свойстве address и это третья запись после запятой

class Candidate {
  constructor(obj) {
    this.obj = obj;
  }
  state() {
    return this.obj.address.split(',')[2]
  }
}

const candidate = new Candidate(condidateArr[0])
console.log('TASK 2:', candidate.state()) /// Colorado

//3) Создать функцию которая выведет массив с названиями фирм взятыми из свойства company. 
//Если фирмы повторяются в массиве, то удалить дубликаты.

function getCompanyNames() {
  return condidateArr.map(elem => elem.company)
}
console.log('TASK 3:', getCompanyNames()) /// [""EZENT, "JASPER" ... ]

//4) Создать функцию которая выведет мне массив id всех кандидатов, которые были зарегистрированы в том же году что и год указанный в параметре.

function getUsersByYear(year) {
  return condidateArr.filter(elem => +elem.registered.split('-')[0] === year).map(elem => elem._id)
}
console.log('TASK 4:', getUsersByYear(2017)) /// ["5e216bc9cab1bd9dbae25637", "5e216bc9e51667c70ee19f4f" ...]

// 5) Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных по количеству непрочитанных сообщений. 
// Смотрим свойство greeting, там указано это количество в строке. Вам надо достать это число из строки и сверять с параметром вашей функции.

function getCandidatesByUnreadMsg(number) {
  return condidateArr.filter(elem => +elem.greeting.split(' ')[5] === number).map(elem => new Candidate(elem))
}
console.log('TASK 5:', getCandidatesByUnreadMsg(8)) /// [Candidate, Candidate ...]

// 6) Создать поиск кандидатов по номеру телефона. Номер телефона может быть указан не полностью и в любом формате.

const searchCandidatesByPhoneNumber = phone => {
  const modifedPhone = phone.replace(/\D+/g, '')
  return condidateArr.filter(elem => elem.phone.replace(/\D+/g, '').includes(modifedPhone)).map(elem => new Candidate(elem))
}

console.log('TASK 6:', searchCandidatesByPhoneNumber('43'))
/// [Candidate, Candidate, Candidate ...]

console.log('TASK 6:', searchCandidatesByPhoneNumber('+1(869) 40'))
/// [Candidate, Candidate ...]

console.log('TASK 6:', searchCandidatesByPhoneNumber('43'))
/// [Candidate, Candidate, Candidate ...]

console.log('TASK 6:', searchCandidatesByPhoneNumber('+1(869)408-39-82'))
/// [Candidate]


// 7) Написать функцию, которая вернет объект, в котором название ключей будут цвета глаз,
// а значением - массив с кандидатами имеющие такой цвет глаз.
// При этом нельзя самому указывать первоначальный объект с возможными вариантами цветами глаз,
// а генерировать их на основе массива с кандидатами.Cмотреть на свойство eyeColor.

const getEyeColorMap = () => {
  const map = new Map();
  return condidateArr.reduce(function (prev, curr) {
    return map.set(curr.eyeColor, condidateArr.filter(elem => elem.eyeColor == curr.eyeColor));
  }, {})
}

console.log('TASK 7:', getEyeColorMap());
   // {
   // grey: [Candidate, Candidate, Candidate, Candidate ...],
   // blue: [Candidate, Candidate, Candidate, ...],
   // green: [Candidate, Candidate, Candidate, Candidate, Candidate ...]
   // ... etc.
   // }