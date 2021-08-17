const card = document.querySelector('.card');
const container = document.querySelector('.container');
const filterForm = document.querySelector('.form-container');

function makeCard(name, status, species, location, image) {
    newCard = card.cloneNode(true);
    container.appendChild(newCard);
    newCard.querySelector('.card-image').querySelector('img').src = `${image}`;
    newCard.querySelector('.card-info').querySelector('h1').textContent = name;
    newCard.querySelector('.status').querySelector('p').textContent = species + ' -- ' + status;
    if (status === 'Dead') {
        newCard.querySelector('.live-status').classList.add('dead');
    }
    newCard.querySelector('.content').querySelector('p').textContent = location;
}
function filter() {
    filterForm.addEventListener("change", function (event) {
        console.log(event.target.id)
        let url = `https://rickandmortyapi.com/api/character/`;
        if (event.target.id === "male" || event.target.id === "female") {
            url = `?gender=${event.target.id}`;
        } else if (event.target.id === "alive" || event.target.id === "dead") {
            url = `?status=${event.target.id}`;
        };
        createList(url);
        document.querySelectorAll('.card').forEach(el => el.remove());
    });
}
function createListOfRandomCharacters() {
    let dataArr = [];
    for (let i = 0; i < 10; i++) {
        dataArr.push(Math.floor(Math.random() * (671 - 1) + 1));
    }
    const promise = fetch(`https://rickandmortyapi.com/api/character/${dataArr}`)
        .then(response => response.json())
        .then((data) => {
            for (let elem of data) { makeCard(elem.name, elem.status, elem.species, elem.location.name, elem.image) }
        })
    filter();
}
function createList(url) {
    const promise = fetch('https://rickandmortyapi.com/api/character' + url)
        .then(response => response.json())
        .then((data) => {
            for (let elem of data.results) { makeCard(elem.name, elem.status, elem.species, elem.location.name, elem.image) }
        })
        .catch((err) => { console.warn(err) })
}
createListOfRandomCharacters();
card.remove()