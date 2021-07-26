function makeMatrixFunction(number) {
    let table = document.querySelector('#matrix');
    for (let i = 1; i <= number; i++) {
        let trElements = document.createElement('tr');
        table.append(trElements);
        for (let j = 0; j < number; j++) {
            let tdElements = document.createElement('td');
            tdElements.append(document.createTextNode(j + i));
            if (i / j + 1 == 1) {
                tdElements.classList.add('background-color')
            }
            trElements.append(tdElements);
        };
        table.append(trElements);
    };
};

makeMatrixFunction(5);
