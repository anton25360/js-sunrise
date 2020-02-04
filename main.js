"use strict";
fetch('https://randomuser.me/api/')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    //gets random location data
    var city = data.results[0].location.city;
    var country = data.results[0].location.country;
    var long = data.results[0].location.coordinates.longitude;
    var lat = data.results[0].location.coordinates.latitude;
    fetch("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=-" + long + "&date=today")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var sunrise = data.results.sunrise;
        var sunset = data.results.sunset;
        if (sunrise == null) {
            document.location.reload(true);
        }
        document.querySelector('#city').innerHTML += "" + city;
        document.querySelector('#country').innerHTML += "" + country;
        document.querySelector('#sunrise').innerHTML += "Sunrise: " + sunrise;
        document.querySelector('#sunset').innerHTML += "Sunset: " + sunset;
    });
});
