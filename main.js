"use strict";
console.log('hi there my dude');
fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
});
fetch('https://randomuser.me/api/')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    //gets random coordinates
    var city = data.results[0].location.city;
    var country = data.results[0].location.country;
    var long = data.results[0].location.coordinates.longitude;
    var lat = data.results[0].location.coordinates.latitude;
    console.log(city + ', ' + country);
    console.log(long);
    console.log(lat);
});
