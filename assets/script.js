//variables
var apiKey = '5cf9dab34a270b7bc76596bb2d6c4d94';
var city = '';
var today = dayjs();

//search for city 
var searchBtn = document.getElementById('city-search');


var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;



fetch(queryUrl);
//todays info including location, date, temp, wind, humidity, wind speed

var todaysDate = dayjs();
$('#date').text(today.format('M/D/YYYY'));

//5 day forecast