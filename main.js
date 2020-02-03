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
    console.log(data.results[0].location.coordinates.latitude);
    console.log(data.results[0].location.coordinates.longitude);
});
