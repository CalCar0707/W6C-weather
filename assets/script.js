//variables
var apiKey = '5cf9dab34a270b7bc76596bb2d6c4d94';
var city = '';

var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;


fetch(queryUrl);