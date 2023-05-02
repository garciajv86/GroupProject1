var ipGeolocationApiKey = "946d9ece5fe4454391cdd36952b69d01";
var container = document.getElementById("container1");
var container2 = document.getElementById('container2');
var btn = document.getElementById("btn");
var btn2 = document.getElementById('btn2');
var sunriseTime = document.getElementById("sunriseTime");
var sunriseTime2 = document.getElementById('sunriseTime2');
var sunriseTime3 = document.getElementById('sunriseTime3');
var sunriseTime4 = document.getElementById('sunriseTime4');
var firstLight = document.getElementById("firstLight");
var firstLight2 = document.getElementById('firstLight2');
var firstLight3 = document.getElementById('firstLight3');
var firstLight4 = document.getElementById('firstLight4');
var sunsetTime = document.getElementById("sunsetTime");
var sunsetTime2 = document.getElementById('sunsetTime2');
var sunsetTime3 = document.getElementById('sunsetTime3');
var sunsetTime4 = document.getElementById('sunsetTime4');
var lastLight = document.getElementById("lastLight");
var lastLight2 = document.getElementById('lastLight2');
var lastLight3 = document.getElementById('lastLight3');
var lastLight4 = document.getElementById('lastLight4');
var cityName = document.getElementById("cityName");
var cityName2 = document.getElementById('cityName2');
var dayLength = document.getElementById("dayLength");
var dayLength2 = document.getElementById('dayLength2');
var dayLength3 = document.getElementById('dayLength3');
var dayLength4 = document.getElementById('dayLength4');
var mainPage = document.getElementById("main-page");
//$ curl 'https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY'

// Function for if the coordinates is successful
function success() {
  var city = document.getElementById("city-input");
  var city = city.value;
  cityName.textContent = city.toUpperCase();

  var geoCodingApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=a7fc7c3921309a588e45475792082481`;

  fetch(geoCodingApi)
    .then(function (response) {
      if (!response.ok) throw new Error("oops");
      return response.json();
    })
    .then(function (data) {
      return data[0];
    })

    .then(function (location) {

      var sunriseSunsetApi = `https://api.sunrisesunset.io/json?lat=${location.lat}&lng=${location.lon}&timezone&date=today`;




      return fetch(sunriseSunsetApi);
    })
    .then((Response) => {
      if (!Response.ok) throw new Error("error!");

      return Response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.results.sunrise);
      sunriseTime.textContent = data.results.sunrise;
      firstLight.textContent = data.results.first_light;
      sunsetTime.textContent = data.results.sunset;
      lastLight.textContent = data.results.last_light;
      dayLength.textContent = `Day Length Today: ${data.results.day_length}`;
      mainPage.style.display = "block";
    });
}

// Function for if the coordinates is unsuccessful
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Event Listener
btn.addEventListener("click", function (event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(success, error);
});




function success2() {
    var city2 = document.getElementById("city-input2");
    var city2 = city2.value;
    cityName2.textContent = city2.toUpperCase();
  
    var geoCodingApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city2}&limit=20&appid=a7fc7c3921309a588e45475792082481`;
  
    fetch(geoCodingApi)
      .then(function (response) {
        if (!response.ok) throw new Error("oops");
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        return data[0];
      })
  
      .then(function (location) {
        var sunriseSunsetApi = `https://api.sunrisesunset.io/json?lat=${location.lat}&lng=${location.lon}&timezone&date=today`;
  
        return fetch(sunriseSunsetApi);
      })
      .then((Response) => {
        if (!Response.ok) throw new Error("error!");
  
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.results.sunrise);
        sunriseTime2.textContent = data.results.sunrise;
        firstLight2.textContent = data.results.first_light;
        sunsetTime2.textContent = data.results.sunset;
        lastLight2.textContent = data.results.last_light;
        dayLength2.textContent = `Day Length Today: ${data.results.day_length}`;
        mainPage.style.display = "block";
      });
  }
  
  // Function for if the coordinates is unsuccessful
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  // Event Listener
  btn2.addEventListener("click", function (event) {
    event.preventDefault();
  
    navigator.geolocation.getCurrentPosition(success2, error);
  });




  function success3() {
    var city = document.getElementById("city-input");
    var city = city.value;
    cityName.textContent = city.toUpperCase();
  
    var geoCodingApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=a7fc7c3921309a588e45475792082481`;
  
    fetch(geoCodingApi)
      .then(function (response) {
        if (!response.ok) throw new Error("oops");
        return response.json();
      })
      .then(function (data) {
        return data[0];
      })
  
      .then(function (location) {
  
        var sunriseSunsetApi = `https://api.sunrisesunset.io/json?lat=${location.lat}&lng=${location.lon}&timezone&date=tomorrow`;
  
  
  
  
        return fetch(sunriseSunsetApi);
      })
      .then((Response) => {
        if (!Response.ok) throw new Error("error!");
  
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.results.sunrise);
        sunriseTime3.textContent = data.results.sunrise;
        firstLight3.textContent = data.results.first_light;
        sunsetTime3.textContent = data.results.sunset;
        lastLight3.textContent = data.results.last_light;
        dayLength3.textContent = `Day Length Today: ${data.results.day_length}`;
        mainPage.style.display = "block";
      });
  }
  
  // Function for if the coordinates is unsuccessful
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  // Event Listener
  btn.addEventListener("click", function (event) {
    event.preventDefault();
  
    navigator.geolocation.getCurrentPosition(success3, error);
  });
  

  function success4() {
    var city = document.getElementById("city-input");
    var city = city.value;
    cityName.textContent = city.toUpperCase();
  
    var geoCodingApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=a7fc7c3921309a588e45475792082481`;
  
    fetch(geoCodingApi)
      .then(function (response) {
        if (!response.ok) throw new Error("oops");
        return response.json();
      })
      .then(function (data) {
        return data[0];
      })
  
      .then(function (location) {
  
        var sunriseSunsetApi = `https://api.sunrisesunset.io/json?lat=${location.lat}&lng=${location.lon}&timezone&date=tomorrow`;
  
  
  
  
        return fetch(sunriseSunsetApi);
      })
      .then((Response) => {
        if (!Response.ok) throw new Error("error!");
  
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.results.sunrise);
        sunriseTime4.textContent = data.results.sunrise;
        firstLight4.textContent = data.results.first_light;
        sunsetTime4.textContent = data.results.sunset;
        lastLight4.textContent = data.results.last_light;
        dayLength4.textContent = `Day Length Today: ${data.results.day_length}`;
        mainPage.style.display = "block";
      });
  }
  
  // Function for if the coordinates is unsuccessful
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  // Event Listener
  btn2.addEventListener("click", function (event) {
    event.preventDefault();
  
    navigator.geolocation.getCurrentPosition(success4, error);
  });
  