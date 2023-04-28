var container = document.getElementById('container1');
var btn = document.getElementById('btn');
var latEl = document.getElementById('lat');
var lonEl = document.getElementById('lon');
var ipGeolocationApiKey = "946d9ece5fe4454391cdd36952b69d01"
//$ curl 'https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY'




// Function for if the coordinates is successful
function success(pos) {
    
    // Fetching the coordinate from the object
    const coordinates = pos.coords;

    var lat = coordinates.latitude;
    var lon = coordinates.longitude;
    
    var sunriseSunsetApi = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&timezone=UTC&date=today`;

    fetch(sunriseSunsetApi)

    .then(Response => {

        if(!Response.ok) throw new Error('error!');
        console.log(Response);
        return Response.json();
    })
    .then(data => {

        console.log(data);
        console.log(data.results.sunrise);

    })
    }

// Function for if the coordinates is unsuccessful
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

navigator.geolocation.getCurrentPosition(success, error);
     










