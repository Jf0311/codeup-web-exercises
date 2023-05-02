(function() {
    "use strict"


    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: "Steuben, US",
        units: "imperial",
        lat: 42.2667,
        lon: -77.333

    }).done(function (weatherForecast) {
        let picture = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[0].weather[0].icon}.png">`
        console.log(weatherForecast.list[0].weather[0].icon)
        let pictureTwo = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[1].weather[0].icon}.png">`
        let pictureThree = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[2].weather[0].icon}.png">`
        let pictureFour = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[3].weather[0].icon}.png">`
        let pictureFive = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[4].weather[0].icon}.png">`
        console.log(weatherForecast);
        console.log(weatherForecast.list[0].main.temp);
        console.log(weatherForecast.list[1].main.temp)
        console.log(weatherForecast.list[2].main.temp)
        console.log(weatherForecast.list[3].main.temp)
        console.log(weatherForecast.list[4].main.temp)
        //THIS IS WHERE THE CODE LIVES
        // use query selector and try to append it to the card
        // This is for the max temp
        document.querySelector("#day1-max").append(weatherForecast.list[0].main.temp_max);
        document.querySelector("#day2-max").append(weatherForecast.list[8].main.temp_max);
        document.querySelector("#day3-max").append(weatherForecast.list[16].main.temp_max);
        document.querySelector("#day4-max").append(weatherForecast.list[24].main.temp_max);
        document.querySelector("#day5-max").append(weatherForecast.list[32].main.temp_max);
        //this is for min temp
        document.querySelector("#day1-min").append(weatherForecast.list[0].main.temp_min);
        document.querySelector("#day2-min").append(weatherForecast.list[8].main.temp_min);
        document.querySelector("#day3-min").append(weatherForecast.list[16].main.temp_min);
        document.querySelector("#day4-min").append(weatherForecast.list[24].main.temp_min);
        document.querySelector("#day5-min").append(weatherForecast.list[32].main.temp_min);
        // This is for humidity
        document.querySelector("#day1-humidity").append(weatherForecast.list[0].main.humidity);
        document.querySelector("#day2-humidity").append(weatherForecast.list[8].main.humidity);
        document.querySelector("#day3-humidity").append(weatherForecast.list[16].main.humidity);
        document.querySelector("#day4-humidity").append(weatherForecast.list[24].main.humidity);
        document.querySelector("#day5-humidity").append(weatherForecast.list[32].main.humidity);
        //This is for wind speed
        document.querySelector("#day1-conditions").append(weatherForecast.list[0].wind.speed);
        document.querySelector("#day2-conditions").append(weatherForecast.list[8].wind.speed);
        document.querySelector("#day3-conditions").append(weatherForecast.list[16].wind.speed);
        document.querySelector("#day4-conditions").append(weatherForecast.list[24].wind.speed);
        document.querySelector("#day5-conditions").append(weatherForecast.list[32].wind.speed);
        //This is for the day of the week
        document.querySelector("#day-1").append(weatherForecast.list[0].dt_txt);
        document.querySelector("#day-2").append(weatherForecast.list[8].dt_txt);
        document.querySelector("#day-3").append(weatherForecast.list[16].dt_txt);
        document.querySelector("#day-4").append(weatherForecast.list[24].dt_txt);
        document.querySelector("#day-5").append(weatherForecast.list[32].dt_txt);
        //
        //  document.querySelector(".logo").append(`${picture}`);
        $('.logo').html(picture)

    });
// 1)Recreate the map below your 5 day forecast.
// 2) Read the documentation and figure out how to allow the user to drop a pin on any place on the map.
// 3) Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API.
// 4)Update the five-day forecast with the information from those coordinates
// (you should also get rid of your input boxes at this point).

// console.log(MAPBOX_KEY)
// mapboxgl.accessToken = MAPBOX_KEY;
// let map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     zoom: 8,
//     center: [-77.333, 42.2667,]
//
// });
// // Create a new marker.
// const marker = new mapboxgl.Marker()
//     .setLngLat([-77.333, 42.2667,])
//     .addTo(map);

//Geocoder

    mapboxgl.accessToken = MAPBOX_KEY;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 8,
        center: [-77.333, 42.2667,]
    });

// Add the control to the map.
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
    map.addControl(new mapboxgl.NavigationControl());

//Adding Markers with Geolocation
// var marker = new mapboxgl.Marker()
//     .setLngLat([-77.333, 42.2667,])
//     .addTo(map);


//Reverse Geocoding


//1. Add input that will represent the search bar along with the button that will trigger the search function.
// 2.Make sure to include the geocode function
// 3.Create click functionality for the search button
//4.Inside of the click function grab the text from the search bar and store it in a variable.
// 5. using the geocode function you brought in on step 2 pass the information you stored in the variable from the previous step into the geocode function.
    map.on("click", (e) => {
        let lng = (e.lngLat.lng);
        let lat = (e.lngLat.lat);
        reverseGeocode({lng:lng, lat: lat}, MAPBOX_KEY)
    })

})()

// function geocode(search, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//             // to get all the data from the request, comment out the following three lines...
//         }).then(function(data) {
//             return data.features[0].center;
//         });
// }
//
//
// /***
//  * reverseGeocode is a method to search for a physical address based on inputted coordinates
//  * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
//  * @param {string} token is your API token for MapBox
//  * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
//  *
//  * EXAMPLE:
//  *
//  *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
//  *      // do something with results
//  *  })
//  *
//  */
// function reverseGeocode(coordinates, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//         })
//         // to get all the data from the request, comment out the following three lines...
//         .then(function(data) {
//             return data.features[0].place_name;
//         });
// }


