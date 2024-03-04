//global variables
var city = document.getElementById('city-input');
var currentWeather = document.getElementById('todays-weather');
var prevCityList = document.getElementById('prev-city-list');

//openweather api variables
var apiKey = '5cf9dab34a270b7bc76596bb2d6c4d94';
var queryUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city.value + '&appid=' + apiKey;
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//dayjs variables
var today = dayjs();

//search button variable
var searchBtn = document.getElementById('city-search');

//function to fetch todays weather data- WORKING PROPERLY
function todaysWeather() {
    queryUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city.value + '&appid=' + apiKey;

    fetch(queryUrl)
        .then(function (response) {
         return response.json();
})
//adds prev search history to list
    .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var prevCitySearch = document.createElement('h2');
            prevCitySearch.textContent = data[i].name;
            console.log(prevCitySearch);
            currentWeather.appendChild(prevCitySearch);
        }
        //todays weather data
                //todays info including location, date, temp, wind, humidity, wind speed
        var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat + '&lon=' + data[0].lon + '&appid=' + apiKey + '&units=imperial';
        fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
            

            //for loop for 5 day forecast- WORKING
            // for (var i = 0; i < data.list.length; i=i+8) {
                var date = document.createElement('h3');
                var temperature = document.createElement('div');
                var windSpeed = document.createElement('div');
                var humidity = document.createElement('div');

            // date.textContent = data.list[i].dt_txt;
            // temperature.textContent = 'Temp: ' + data.list[i].main.temp + '° F';
            // windSpeed.textContent = 'Wind: ' + data.list[i].wind.speed + ' MPH';
            // humidity.textContent = 'Humidity: ' + data.list[i].main.humidity + '%';

            date.textContent = data.list[0].dt_txt;
            temperature.textContent = 'Temp: ' + data.list[0].main.temp + '° F';
            windSpeed.textContent = 'Wind: ' + data.list[0].wind.speed + ' MPH';
            humidity.textContent = 'Humidity: ' + data.list[0].main.humidity + '%';

            //dont need city to show several times in loop
            currentWeather.append(date);
            currentWeather.append(temperature);
            currentWeather.append(windSpeed);
            currentWeather.append(humidity);
            })
       })
    }
    //);
    
    
//}

//local storage
localStorage.setItem('city', JSON.stringify((city.value)));
localStorage.getItem('city');

//var prevCity = localStorage.getItem(city.value);
//prevCityList.textContent = prevCity;


//retrieve todays date in proper formats- WORKING PROPERLY
var todaysDate = dayjs();
//$('#date').text(today.format('M/D/YYYY'));

//5 day forecast
searchBtn.addEventListener('click', todaysWeather);