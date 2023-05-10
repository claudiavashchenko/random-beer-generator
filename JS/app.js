const beerButton = document.querySelector('#beer-button')
const randomBeerTitle = document.querySelector('#random-beer')
const randomBeerDescription = document.querySelector('#description')

function getData() {
   fetch('https://api.punkapi.com/v2/beers/random')
   .then(response => response.json())
   .then(data => {
    const name = data[0].name
    const description = data[0].description
    randomBeerTitle.textContent = name
    randomBeerDescription.textContent = description
   })
}

beerButton.addEventListener('click', getData)