function searchFilm() {
    let searchInput = document.querySelector('#search');
    let filmArray = Array.from(document.querySelectorAll('li'));
    searchInput.addEventListener('input', outputValue);
    function outputValue() {
        document.getElementById('filmsCount').innerHTML = '';
        var l = this.value.length;
        if (l > 0) {
            let count = 0;
            for (let i = 0; i < filmArray.length; i++) {
                let filmSplit = filmArray[i].textContent.split('').slice(0, l).join('');
                if (filmSplit == this.value) {
                    count++;
                };
            };
            document.getElementById('filmsCount').innerHTML = count;
        };
    };
};

searchFilm()