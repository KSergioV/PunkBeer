const weakBeerBtn = document.querySelector('.weak-beer-btn');
const mediumBeerBtn = document.querySelector('.medium-beer-btn');
const strongBeerBtn = document.querySelector('.strong-beer-btn');

const beerList = document.querySelector('.beer-list');

let output = '';

const api = `https://api.punkapi.com/v2/beers?page=2&per_page=80`;

weakBeerBtn.addEventListener('click', getWeakBeer);
mediumBeerBtn.addEventListener('click', getMediumBeer);
strongBeerBtn.addEventListener('click', getStrongBeer);


function getBeer() {
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            data.forEach(function (index) {

                output += `
                    <li class="beer-item">
                        <div class="beer-desc">
                            <h3 class="beer-title">${index.name}</h3>
                            <p class="beer-avb">ABV ${index.abv}</p>
                            <p>${index.description}</p>
                        </div>
                        <img src="${index.image_url}"></img>
                    </li>`
            });

            beerList.innerHTML = output;


        })
        .catch(function (err) {
            console.log('ERR: ' + err);
        });
}

getBeer();


function getWeakBeer() {
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let output = '';
            data.filter(function (index) {
                if (index.abv <= 4.5) {
                    output += `
                    <li class="beer-item">
                        <div class="beer-desc">
                            <h3 class="beer-title">${index.name}</h3>
                            <p class="beer-avb">ABV ${index.abv}</p>
                            <p>${index.description}</p>
                        </div>
                        <img src="${index.image_url}"></img>
                    </li>`
                }
            });
            beerList.innerHTML = output;
        })
        .catch(function (err) {
            console.log('ERR: ' + err);
        });
}



function getMediumBeer() {
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let output = '';
            data.filter(function (index) {
                if (index.abv > 4.5 && index.abv <= 7.5) {
                    output += `
                    <li class="beer-item">
                        <div class="beer-desc">
                            <h3 class="beer-title">${index.name}</h3>
                            <p class="beer-avb">ABV ${index.abv}</p>
                            <p>${index.description}</p>
                        </div>
                        <img src="${index.image_url}"></img>
                    </li>`
                }
            });

            beerList.innerHTML = output;
        })
        .catch(function (err) {
            console.log('ERR: ' + err);
        });
};

function getStrongBeer() {
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let output = '';
            data.filter(function (index) {
                if (index.abv > 7.5 && index.abv <= 50) {
                    output += `
                    <li class="beer-item">
                        <div class="beer-desc">
                            <h3 class="beer-title">${index.name}</h3>
                            <p class="beer-avb">ABV ${index.abv}</p>
                            <p>${index.description}</p>
                        </div>
                        <img src="${index.image_url}"></img>
                    </li>`
                }
            });

            beerList.innerHTML = output;
        })
        .catch(function (err) {
            console.log('ERR: ' + err);
        });
}


