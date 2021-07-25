/*
2) Напишите функцию, которая спрашивает у пользователя разрешения добавить картинку (confirm())
 и в случае согласия добавляет картинку на страницу (ссылку на картинку пользователь должен задавать
самостоятельно).
*/

function confirmImage() {
    if (confirm('Сan i add a picture?')) {
        let parent = document.getElementById('wrapper');
        let img = document.createElement("IMG");
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbyBb_b68N4gcL7ihnLa2Cod7yE0C5CnNuB9osUIp1iXadFb7La1KyvC5oXjxXaFBpQU&usqp=CAU";
        return parent.after(img);
    } return document.getElementById('wrapper').innerHTML = 'Without picture';
};
confirmImage();