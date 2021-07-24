/*
1) Напишите функцию, которая изменяет фоновый цвет текста последнего параграфа в блоке
<body>, а так же функцию, которая меняет блоки footer и main местами.
*/

function changeParagraph() {
    let mainParagraphs = [...document.getElementById('main').children];
    return mainParagraphs[mainParagraphs.length - 1].style = 'background:red';
};
function changeBlock() {
    let footer = document.getElementById('footer');
    let main = document.getElementById('main');
    return footer.before(main);
};
changeParagraph();
changeBlock();
