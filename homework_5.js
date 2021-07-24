/*
1) Напишите программу, которая спрашивает у пользователя номер маршрутки.
Если это номер 7, 255 или 115, тогда пользователь может ехать.
Введите в консоли "You can go".
Если нет - выведите в консоль "Please wait".
*/

switch (prompt('What is number of your bus?')) {
    case '7':
        console.log('You can go');
        break;
    case '255':
        console.log('You can go');
        break;
    case '115':
        console.log('You can go');
        break;
    default:
        console.log('Please wait');
}

/*
2) Напишите программу, которая получает число от пользователя 
и сравнивает введенное значение с числом Pi.
Сравните является ли число больше, чем число Pi.
Сравните является ли число меньше, чем число Pi.
Сравните является ли число равным числу Pi.
Если введенное число, числом не является выведите ошибку.
Все результаты отобразите в консоли в формате:
*/

let number = prompt('Enter number');
if (isNaN(number) == false) {
    console.log(`You entered: ${number}`);
    number > Math.PI ? console.log(`Is greater then PI: true`) : console.log(`Is greater then PI: false`);
    number < Math.PI ? console.log(`Is less then PI: true`) : console.log(`Is less then PI: false`);
    number == Math.PI ? console.log(`Is equal PI: true`) : console.log(`Is equal PI: false`);
}
else console.log('You entered not a number');


/*
3) Напишите программу, которая спрашивает у пользователя число 
и выводит в консоль день недели в соответсвии с этим числом.
Если введенное значение не является целым числом 
в диапазоне от 1 до 7, выведите в консоли сообщение "Incorrect format"
Если число находится в нужно диапазоне, отобразите 
в консоли день недели эквивалентный этому числу.
*/

let dayNumber = prompt('Enter number of day');
if (Number.isInteger(dayNumber) == false) {
    switch (dayNumber) {
        case '1':
            console.log('Monday');
            break;
        case '2':
            console.log('Tuesday');
            break;
        case '3':
            console.log('Wednesday');
            break;
        case '4':
            console.log('Thursday');
            break;
        case '5':
            console.log('Friday');
            break;
        case '6':
            console.log('Saturday');
            break;
        case '7':
            console.log('Sunday');
            break;
        default: console.log('Incorrect format');
    }
}
else console.log('Incorrect format');

/*
4) Напишите программу, которая предлагает пользователю ввести пароль 
и проверяет, является ли он надежным по следующим условиям:
1) Пароль должен быть не менее шести символов.
2) Пароль не должен равняться строке qwerty или 123456.
3) Пароль должен содержать заглавные буквы.
Если все условия выполнились, выведите в консоль сообщение "Strong".
Если первое условие не выполнилось, выведите в консоль сообщение "Middle",
если длина пароля не менее пяти символов.
Во всех остальных случаях, выведите в консоль сообщение "Weak".
*/

let userPassword = prompt('Enter password');
if (userPassword.length >= 6
    && userPassword !== 'qwerty'
    && userPassword !== 123456
    && userPassword !== userPassword.toLowerCase()) {
    console.log('Strong');
} else if (userPassword.length == 5
    && userPassword !== 'qwert'
    && userPassword !== 12345
    && userPassword !== userPassword.toLowerCase()) {
    console.log('Middle');
} else console.log('Weak');

/*
5) Напишите программу, которая спрашивает у пользователя язык.
Если это язык "ru" - то выведите в консоль "Привет"
Если это язык "en" - то выведите в консоль"Hello"
Если это язык "ua" - то выведите в консоль "Привiт".
В противном случае выведите "I don't know this language".
Реализуйте программу двумя способами с использованием if/else и switch/case.
*/

//          if/else

let userLanguage = prompt('What is your language?');
if (userLanguage == 'ru') {
    console.log('Привет');
} else if (userLanguage == 'en') {
    console.log('Hello');
} else if (userLanguage == 'ua') {
    console.log('Привіт');
} else console.log("I don't know this language");

//          switch/case 

switch (true) {
    case userLanguage == 'ru':
        console.log('Привет');
        break;
    case userLanguage == 'en':
        console.log('Hello');
        break;
    case userLanguage == 'ua':
        console.log('Привіт');
        break;
    default: console.log("I don't know this language");
};
