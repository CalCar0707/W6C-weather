//global variables
var city = document.getElementById('city-input');
var currentWeather = document.getElementById('todays-weather');
var prevCityList = document.getElementById('prev-city-list');

//openweather api variables
var apiKey = '5cf9dab34a270b7bc76596bb2d6c4d94';
var queryUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city.value + '&appid=' + apiKey;
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//dayjs variables
var today = dayjs();

//search button variable
var searchBtn = document.getElementById('city-search');

//function to fetch todays weather data- WORKING PROPERLY
function todaysWeather() {
    queryUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city.value + '&appid=' + apiKey;
    
    fetch(queryUrl)
        .then(function (response) {
         return response.json();
})
//adds prev search history to list- WORKING
    .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = data[i].name;
            currentWeather.appendChild(listItem);
        }
        //todays weather data-WORKING
        var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat + '&lon=' + data[0].lon + '&appid=' + apiKey + '&units=imperial';
        fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
            
            for (var i = 0; i < data.list.length; i=i+8) {
            var temperature = document.createElement('h3');
            var windSpeed = document.createElement('h4');
            var humidity = document.createElement('h4');

            temperature.textContent = 'Temp: ' + data.list[i].main.temp + '° F';
            windSpeed.textContent = 'Wind: ' + data.list[i].wind.speed + ' MPH';
            humidity.textContent = 'Humidity: ' + data.list[i].main.humidity + '%';

            city.value;
            currentWeather.append(temperature);
            currentWeather.append(windSpeed);
            currentWeather.append(humidity);
            }
       })
    });
    
    
}

//local storage
var prevCity = localStorage.getItem('city'.value);
prevCityList.textContent = prevCity;


//todays info including location, date, temp, wind, humidity, wind speed


//retrieve todays date in proper formats- WORKING PROPERLY
var todaysDate = dayjs();
$('#date').text(today.format('M/D/YYYY'));

//5 day forecast
searchBtn.addEventListener('click', todaysWeather);