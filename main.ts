console.log('hi there my dude');

fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today')
    .then((response) => response.json())
    .then((data) => {

        console.log(data);

    })



fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
        
        //gets random coordinates
        let city:string = data.results[0].location.city
        let country:string = data.results[0].location.country
        let long:number = data.results[0].location.coordinates.longitude
        let lat:number = data.results[0].location.coordinates.latitude

        console.log(city + ', ' + country);
        console.log(long);
        console.log(lat);

    })
