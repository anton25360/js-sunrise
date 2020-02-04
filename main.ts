fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {

        //gets random location data
        let city: string = data.results[0].location.city
        let country: string = data.results[0].location.country
        let long: number = data.results[0].location.coordinates.longitude
        let lat: number = data.results[0].location.coordinates.latitude

        console.log(city + ', ' + country);
        console.log(long);
        console.log(lat);

        fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=-${long}&date=today`)
            .then((response) => response.json())
            .then((data) => {

                var sunrise = data.results.sunrise
                var sunset = data.results.sunset

                console.log(sunrise);
                console.log(sunset);

                document.querySelector('#city').innerHTML += `${city}`
                document.querySelector('#country').innerHTML += `${country}`
                document.querySelector('#sunrise').innerHTML += `Sunrise: ${sunrise}`
                document.querySelector('#sunset').innerHTML += `Sunset: ${sunset}`
                
            })
    })


