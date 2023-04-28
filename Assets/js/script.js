
var ipGeolocationAPI = "946d9ece5fe4454391cdd36952b69d01"

//$ curl 'https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY'

sunriseSunsetApi = `https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873&timezone=UTC&date=today`;

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




// var container = document.getElementById('container1');
// var btn = document.getElementById('btn');
// var latEl = document.getElementById('lat');
// var lonEl = document.getElementById('lon');


// function run(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showCoordinates);
//     } else {
//         latEl.textContent = 'Not available';
//         lonEl.textContent = 'Not available';
//     }
    
// };

// function showCoordinates(myPosition){
//     latEl.textContent = myPosition.coords.latitude;
//     lonEl.textContent = myPosition.coords.longitude;
// }
// btn.addEventListener('click', run);