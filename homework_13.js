/*
1) Создайте функцию createBuffer(), которая создает локальную переменную text
в виде пустой строки и возвращает функцию buffer, с которой можно работать следующим образом:
Если в функцию buffer был передан строковый параметр – этот параметр записывается в переменную text.
Иначе выведите ошибку в консоль.
Если функция buffer вызывается без параметров – возвращается значение переменной text.
Создайте переменную и запишите в нее результат выполнения функции createBuffer().
Продемонстрируйте работу возвращаемой функции buffer с параметром и без.
*/

function createBuffer() {
    let text = '';
    return function (value = '') {
        if (typeof value === 'string') {
            if (value === false) {
                return text;
            } text += value;
            return text;
        } return console.log('Error');
    };
};

let buffer = createBuffer();
buffer("A");
buffer("XYZ");
console.log(buffer()); // AXYZ
buffer();
console.log(buffer());
buffer(3);


/*
2) Создайте функцию signUp(), которая принимаем параметры userName,
 password и возвращает объект со свойством userName и методом signIn().
Метод signIn() принимает параметр newPassword и сравнивает его значение со значением password.
Если пароли совпадают – метод возвращает сообщение
'Sign in success for ${userName}' , иначе – 'Password is incorrect' .
Создайте переменную user и запишите в нее результат вызова функции signUp().
Результат работы функции выведите в консоль.
*/

function signUp(name, password) {
    return {
        userName: name,
        signIn(newPassword) {
            if (newPassword === password) {
                return console.log(`Sign in success for ${this.userName}`);
            } return console.log('Password is incorrect');
        }
    };
};
let user = signUp("billy", "qwerty");
user.signIn("a"); // Password is incorrect
user.signIn("qwerty"); // Sign in success for billy