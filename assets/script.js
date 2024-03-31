//global variables

// user input city being searched
var city = document.getElementById('city-input');

//todays weather div display
var currentWeather = document.getElementById('todays-weather');

//previous search history
var prevCityList = document.getElementById('prev-city-list');

//openweather api variables
var apiKey = '5cf9dab34a270b7bc76596bb2d6c4d94';
var queryUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city.value + '&appid=' + apiKey;
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//dayjs variables
var today = dayjs();

//search button variable
var searchBtn = document.getElementById('search-btn');


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
            for (var i = 0; i < data.list.length; i=i+8) {
                var date = document.createElement('h3');
                var temperature = document.createElement('div');
                var weather = document.createElement('div');
                var icon = document.createElement('img');
                var windSpeed = document.createElement('div');
                var humidity = document.createElement('div');

            date.textContent = data.list[i].dt_txt;
            weather.textContent = data.list[i].weather[0].main 
            icon.textContent = data.list[i].weather[0].icon
            temperature.textContent = 'Temp: ' + data.list[i].main.temp + '° F';
            windSpeed.textContent = 'Wind: ' + data.list[i].wind.speed + ' MPH';
            humidity.textContent = 'Humidity: ' + data.list[i].main.humidity + '%';

            // date.textContent = data.list[0].dt_txt;
            // temperature.textContent = 'Temp: ' + data.list[0].main.temp + '° F';
            // windSpeed.textContent = 'Wind: ' + data.list[0].wind.speed + ' MPH';
            // humidity.textContent = 'Humidity: ' + data.list[0].main.humidity + '%';
            console.log(icon);

            // if(icon === '04d') {
            //     var icon = document.createElement('img');
                    // currentWeather.append()
            // }

            //dont need city to show several times in loop
            currentWeather.append(date);
            currentWeather.append(temperature);
            currentWeather.append(weather);
            //currentWeather.append(icon);
            currentWeather.append(windSpeed);
            currentWeather.append(humidity);
            }
            })
       })
    }
  //  );
    
    
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