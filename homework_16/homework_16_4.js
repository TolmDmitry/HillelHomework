/*
4)* Напишите функцию, которая принимает аргумент number, создает матрицу в виде таблицы следующего типа:
первая ячейка в первой строке содержит значение «1», а каждая следующая ячейка должна быть больше на «1»;
первая ячейка второй строки содержит значение «2» и так далее...
Напишите фукнцию, которая меняет цвет ячейкам в таблице, расположенным на обратной
диагонали матрицы.
*/

let number = prompt('Enter number of strins in tabel')
function makeMatrixFunction(number) {
    let table = document.querySelector('#matrix');
    for (let i = 1; i <= number; i++) {
        let trElements = document.createElement('tr');
        table.append(trElements);
        for (let j = 0; j < number; j++) {
            let tdElements = document.createElement('td');
            tdElements.append(document.createTextNode(j + i));
            trElements.append(tdElements);
        };
        table.append(trElements);
    };
};

function changeDiagonalColor() {
    let table = document.querySelector('#matrix');
    let rows = table.rows;
    for (let i = rows.length - 1; i >= 0; i--) {
        for (let j = 0; j < rows.length; j++) {
            if (i + j == rows.length - 1) {
                rows[i].cells[j].style.background = 'red';
            };
        };
    };
};
makeMatrixFunction(number);
changeDiagonalColor();
