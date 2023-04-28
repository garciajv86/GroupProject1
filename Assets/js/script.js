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