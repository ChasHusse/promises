let mainContainer = document.querySelector('main')
let backgroundImageCredit = document.querySelector('#background-image-credit')
let currrentWeather = document.querySelector("#current-weather")

function backgroundImageApi () {
    axios({
        method: 'get',
        url: 'https://pixabay.com/api/?key=34015105-1deddf78460cde37726c1083e&id=1072828'
    })
    .then(res => {
        let image = res.data.hits[0].largeImageURL
        let imageCreator = res.data.hits[0].user

        mainContainer.style.backgroundImage = `url(${image})`
        backgroundImageCredit.innerHTML = `<p>Credit for the background image: ${imageCreator}</p>`
    })
    .catch(err => {
        console.log(err)
        mainContainer.style.backgroundImage = 'url(background.jpg)'
        backgroundImageCredit.innerHTML = `<p class="error">Cant fetch image!</p>`

    })
}
backgroundImageApi()


function weatherApi () {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        const crd = pos.coords;
    
        axios({
            method: 'get',
            url: `https://api.open-meteo.com/v1/forecast?latitude=${crd.latitude}&longitude=${crd.longitude}&current_weather=true&forecast_days=1&start_date=2023-06-09&end_date=2023-06-09&timezone=Europe%2FLondon`
        })
        .then(res => {
            let weather = res.data.current_weather.temperature
            currrentWeather.innerHTML = `<p>Current weather: ${weather}°C</p>`
        })
        .catch(err => console.log(err))
    
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
}
weatherApi()

function timeDate () {
    let date = new Date()
    let currentDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()

    currentDate = currentDate + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

    document.getElementById('time-date').innerHTML =  `<p>Current date and time: ${currentDate}</p>`

    setTimeout('timeDate()', 1000)
}
timeDate()


function twoRandomApi () {

    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos'
    })
    .then(res => {
        document.getElementById('random-api').innerHTML =  `<p>Random API: ${res.data[0].title}</p>`

    })
    .catch(err => console.log(err))

}
twoRandomApi ()

https://pokeapi.co/api/v2/pokemon


function pokemonApi () {

    axios({
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon'
    })
    .then(res => {
        let pokemon = res.data.results[0].name
        document.getElementById('pokemon-api').innerHTML =  `<p>Pokemon: ${pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</p>`

    })
    .catch(err => console.log(err))

}pokemonApi ()