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
        newCard.querySelector('.live-status').style = 'background:red'
    }
    newCard.querySelector('.content').querySelector('p').textContent = location;
    card.remove();
}
function filter() {
    filterForm.addEventListener('click', function (event) {
        if (event.target.id === 'male' || event.target.id === 'female') {
            let url = `https://rickandmortyapi.com/api/character/?gender=${event.target.id}`;
            createList(url);
        } else if (event.target.id === 'alive' || event.target.id === 'dead') {
            let url = `https://rickandmortyapi.com/api/character/?status=${event.target.id}`;
            createList(url);
        }
    })
}
function createList(url) {
    for (let i = 0; i < 10; i++) {
        const promise = fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                makeCard(data.results[i].name, data.results[i].status, data.results[i].species, data.results[i].location.name, data.results[i].image);
            })
            .catch((err) => { console.warn(err) })
    };
}
card.remove()
filter();