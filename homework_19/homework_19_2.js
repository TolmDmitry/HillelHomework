const INGREDIENTS = {
    cocoa: ["cocoa powder", "milk", "sugar"],
    cappuccino: ["milk", "coffee"],
    smoothie: ["banana", "orange", "sugar"],
    "matcha frappe": ["matcha", "milk", "ice"],
};

function createList() {
    let list = document.getElementById("menu");
    list.addEventListener('click', function (event) {
        const ol = document.createElement('ol');
        let listIngredients = INGREDIENTS[event.target.textContent];
        if (listIngredients !== undefined) {
            listIngredients.forEach(ingredient => {
                const li = document.createElement('li');
                const text = document.createTextNode(ingredient);
                li.appendChild(text);
                ol.appendChild(li);
            });
            event.target.appendChild(ol);
        } else
            event.target.querySelector('ol').classList.toggle('hidden');
    });
};
createList();


