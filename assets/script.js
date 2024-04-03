//global variables
let cityInput = document.querySelector('.city-input');
let searchButton = document.querySelector('.search-btn');
//todays weather display
let currentWeather = document.getElementById('todays-weather');
let weatherCardsDiv = document.querySelector('.weather-cards');
// variables for weather cards 
let date = document.querySelector('.date'); 


//previous search history
let prevCityList = document.getElementById('prev-city-list');

//openweather api variables
let apiKey = '5cf9dab34a270b7bc76596bb2d6c4d94';
let queryUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityInput.value + '&appid=' + apiKey;
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//dayjs variables
let today = dayjs();


//function to fetch todays weather data- WORKING PROPERLY
function todaysWeather() {
    queryUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityInput.value + '&appid=' + apiKey;

    fetch(queryUrl)
        .then(function (response) {
         return response.json();
})
//adds prev search history to list
    .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let prevCitySearch = document.createElement('h2');
            prevCitySearch.textContent = data[i].name;
            console.log(prevCitySearch);
            prevCityList.appendChild(prevCitySearch);
        }
        //todays weather data
                //todays info including location, date, temp, wind, humidity, wind speed
        let weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat + '&lon=' + data[0].lon + '&appid=' + apiKey + '&units=imperial';
        fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
            

            //for loop for 5 day forecast- WORKING
            for (let i = 0; i < data.list.length; i=i+8) {
                console.log(data.list[i].dt_txt.split(' ')[0]);
                console.log(data.list[i].weather[0].icon);
                console.log(data.list[i].main.temp);
                console.log(data.list[i].wind.speed);
                console.log(data.list[i].main.humidity);
                    // return `<li class="card">
                    //     <h3>( ${data.list[i].dt_txt.split(' ')[0]} )</h3>
                    //     <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@4x.png" alt="weather-icon">
                    //     <h4>Temp: ${data.list[i].main.temp}° F</h4>
                    //     <h4>Wind: ${data.list[i].wind.speed} MPH</h4>
                    //     <h4>Humidity: ${data.list[i].main.humidity}%</h4>
                    // </li>`


            //     var date = document.createElement('h3');
            //     var temperature = document.createElement('h4');
            //     // var icon = document.createElement('img');
            //     var windSpeed = document.createElement('h4');
            //     var humidity = document.createElement('h4');
            //     var weather = document.createElement('h4');

             date.textContent = data.list[i].dt_txt.split(' ')[0];
            // temperature.textContent = 'Temp: ' + data.list[i].main.temp + '° F';
            // icon.textContent = data.list[i].weather[0].icon
            // windSpeed.textContent = 'Wind: ' + data.list[i].wind.speed + ' MPH';
            // humidity.textContent = 'Humidity: ' + data.list[i].main.humidity + '%';
            // weather.textContent = data.list[i].weather[0].main 

            // //dont need city to show several times in loop
             weatherCardsDiv.append(date.textContent);
            // currentWeather.append(temperature);
            // currentWeather.append(weather);
            // //currentWeather.append(icon);
            // currentWeather.append(windSpeed);
            // currentWeather.append(humidity);
            }
            })
       }
       )
    }
  //  );
    
    
//}

//local storage
localStorage.setItem('city', JSON.stringify((cityInput.value)));
localStorage.getItem('city');

//var prevCity = localStorage.getItem(city.value);
//prevCityList.textContent = prevCity;


//retrieve todays date in proper formats- WORKING PROPERLY
var todaysDate = dayjs();
//$('#date').text(today.format('M/D/YYYY'));

//5 day forecast
searchButton.addEventListener('click', todaysWeather);