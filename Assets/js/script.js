var ipGeolocationApiKey = "946d9ece5fe4454391cdd36952b69d01"
var container = document.getElementById('container1');
var btn = document.getElementById('btn');
var sunriseTime = document.getElementById('sunriseTime');
var firstLight = document.getElementById('firstLight');
var sunsetTime= document.getElementById('sunsetTime');
var lastLight=document.getElementById('lastLight');
//$ curl 'https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY'


// Function for if the coordinates is successful
function success() {

    var city = document.getElementById('city-input');
    var city = city.value;

    var geoCodingApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=a7fc7c3921309a588e45475792082481`;

    fetch(geoCodingApi)

    .then(function(response) {
        if(!response.ok) throw new Error('oops');
        return response.json();
    })
    .then(function(data) {

        console.log(data[0].lat);
        console.log(data[0].lon);
        
        var sunriseSunsetApi = `https://api.sunrisesunset.io/json?lat=${data[0].lat}&lng=${data[0].lon}&timezone=UTC&date=today`;

        fetch(sunriseSunsetApi)

        .then(Response => {

            if(!Response.ok) throw new Error('error!');

            return Response.json();

    })
        .then(data => {

            console.log(data);
            console.log(data.results.sunrise);
            sunriseTime.textContent=data.results.sunrise;
            firstLight.textContent=data.results.first_light;
            sunsetTime.textContent=data.results.sunset;
            lastLight.textContent=data.results.last_light;


    })
    })
    }
    
// Function for if the coordinates is unsuccessful
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }


// Event Listener
btn.addEventListener('click', function(event) {

    event.preventDefault();

    navigator.geolocation.getCurrentPosition(success, error);

  })