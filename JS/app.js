const beerButton = document.querySelector('#beer-button')
const randomBeerTitle = document.querySelector('#random-beer')
const randomBeerDescription = document.querySelector('#description')

function getData() {
   fetch('https://api.punkapi.com/v2/beers/random')
   .then(response => response.json())
   .then(data => {
    console.log(data)
   })
}

beerButton.addEventListener('click', getData)