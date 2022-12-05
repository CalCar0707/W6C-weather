//global variables
var city = document.getElementById('city-input');
console.log(city);

//openweather api variables
var apiKey = '5cf9dab34a270b7bc76596bb2d6c4d94';
var queryUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city.value + '&appid=' + apiKey;
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//dayjs variables
var today = dayjs();

//search button variable
var searchBtn = document.getElementById('city-search');

var prevCityList = document.getElementById('prev-city-list');
var currentWeather = document.getElementById('todays-weather');
//var userInput = document.getElementById('city-input');

//function to fetch todays weather data
function todaysWeather() {
    queryUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city.value + '&appid=' + apiKey;
    fetch(queryUrl)
        .then(function (response) {
         return response.json();
})
    .then(function (data) {
        console.log(data);
    })
}

//local storage
//var prevCity = localStorage.getItem('city');
//prevCityList.textContent = prevCity;

//todays info including location, date, temp, wind, humidity, wind speed


//retrieve todays date in proper formats- WORKING PROPERLY
var todaysDate = dayjs();
$('#date').text(today.format('M/D/YYYY'));

//5 day forecast
searchBtn.addEventListener('click', todaysWeather);