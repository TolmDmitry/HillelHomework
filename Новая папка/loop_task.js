/*
9)* Написать программу, которая спрашивает у пользователя целое положительное число 
и строит равнобедренный треугольник (елочку) из симбола #.

Если number = 6 // returns
     *
    ***
   *****
  *******
 *********
***********

upd: Написать программу, которая будет рисовать перевернутый треугольник

Если number = 6 // returns
***********
 *********
  *******
   *****
    ***
     *
*/


let userNumber = +prompt('enter number');
let star = '';
for (let i = 0; i < userNumber; i++) {
    star = '*';
    space = ' ';
    for (let j = 1; j <= i; j++) {
        star = star - '**';
    };
    console.log(star);

};
// spaceBefore = space.repeat(userNumber - i - 1);
// star = spaceBefore + star;
// console.log(star);


/*
let userNumber = +prompt('enter number');
for (let i = 0; i < userNumber; i++) {
    star = '*';
    space = ' ';
    for (let j = 1; j <= i; j++) {
        star = star + '**';
    };
    spaceBefore = space.repeat(userNumber - i - 1);
    star = spaceBefore + star;
    console.log(star);
};
*/