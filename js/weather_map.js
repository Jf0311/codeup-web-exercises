// let picture = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[0].weather[0].icon}.png">`
//     console.log(weatherForecast.list[0].weather[0].icon)
//     let pictureTwo = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[1].weather[0].icon}.png">`
//     let pictureThree = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[2].weather[0].icon}.png">`
//     let pictureFour = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[3].weather[0].icon}.png">`
//     let pictureFive = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[4].weather[0].icon}.png">

//     // function  weatherOptions (latitude, longitude){
//     //
//     //
//     //
//     // $.get("http://api.openweathermap.org/data/2.5/forecast", {
//     //     APPID: OPEN_WEATHER_APPID,
//     //     q: "Steuben, US",
//     //     units: "imperial",
//     //     lat: latitude,
//     //     lon: longitude,
//     //
//     // }).done(function (weatherForecast) {
//     //     let picture = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[0].weather[0].icon}.png">`
//     //     console.log(weatherForecast.list[0].weather[0].icon)
//     //     let pictureTwo = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[1].weather[0].icon}.png">`
//     //     let pictureThree = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[2].weather[0].icon}.png">`
//     //     let pictureFour = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[3].weather[0].icon}.png">`
//     //     let pictureFive = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[4].weather[0].icon}.png">`
//     //     console.log(weatherForecast);
//     //     console.log(weatherForecast.list[0].main.temp);
//     //     console.log(weatherForecast.list[1].main.temp)
//     //     console.log(weatherForecast.list[2].main.temp)
//     //     console.log(weatherForecast.list[3].main.temp)
//     //     console.log(weatherForecast.list[4].main.temp)
//     //     //THIS IS WHERE THE CODE LIVES
//     //     // use query selector and try to append it to the card
//     //     // This is for the max temp
//     //     document.querySelector("#day1-max").append(weatherForecast.list[0].main.temp_max);
//     //     document.querySelector("#day2-max").append(weatherForecast.list[8].main.temp_max);
//     //     document.querySelector("#day3-max").append(weatherForecast.list[16].main.temp_max);
//     //     document.querySelector("#day4-max").append(weatherForecast.list[24].main.temp_max);
//     //     document.querySelector("#day5-max").append(weatherForecast.list[32].main.temp_max);
//     //     //this is for min temp
//     //     document.querySelector("#day1-min").append(weatherForecast.list[0].main.temp_min);
//     //     document.querySelector("#day2-min").append(weatherForecast.list[8].main.temp_min);
//     //     document.querySelector("#day3-min").append(weatherForecast.list[16].main.temp_min);
//     //     document.querySelector("#day4-min").append(weatherForecast.list[24].main.temp_min);
//     //     document.querySelector("#day5-min").append(weatherForecast.list[32].main.temp_min);
//     //     // This is for humidity
//     //     document.querySelector("#day1-humidity").append(weatherForecast.list[0].main.humidity);
//     //     document.querySelector("#day2-humidity").append(weatherForecast.list[8].main.humidity);
//     //     document.querySelector("#day3-humidity").append(weatherForecast.list[16].main.humidity);
//     //     document.querySelector("#day4-humidity").append(weatherForecast.list[24].main.humidity);
//     //     document.querySelector("#day5-humidity").append(weatherForecast.list[32].main.humidity);
//     //     //This is for wind speed
//     //     document.querySelector("#day1-conditions").append(weatherForecast.list[0].wind.speed);
//     //     document.querySelector("#day2-conditions").append(weatherForecast.list[8].wind.speed);
//     //     document.querySelector("#day3-conditions").append(weatherForecast.list[16].wind.speed);
//     //     document.querySelector("#day4-conditions").append(weatherForecast.list[24].wind.speed);
//     //     document.querySelector("#day5-conditions").append(weatherForecast.list[32].wind.speed);
//     //     //This is for the day of the week
//     //     document.querySelector("#day-1").append(weatherForecast.list[0].dt_txt);
//     //     document.querySelector("#day-2").append(weatherForecast.list[8].dt_txt);
//     //     document.querySelector("#day-3").append(weatherForecast.list[16].dt_txt);
//     //     document.querySelector("#day-4").append(weatherForecast.list[24].dt_txt);
//     //     document.querySelector("#day-5").append(weatherForecast.list[32].dt_txt);
//     //     //
//     //     //  document.querySelector(".logo").append(`${picture}`);
//     //     $('.logo').html(picture)
//     //
//     // });}
//     // console.log(weatherOptions())
//
//     let apiKey = OPEN_WEATHER_APPID;
//     let city = "Steuben, US";
//     let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
//
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             let weatherForecast = data;
//
//             ["#day1-max", "#day2-max", "#day3-max", "#day4-max", "#day5-max"].forEach((selector, index) => {
//                 document.querySelector(selector).append(weatherForecast.list[index * 8].main.temp_max);
//             });
//
//             ["#day1-min", "#day2-min", "#day3-min", "#day4-min", "#day5-min"].forEach((selector, index) => {
//                 document.querySelector(selector).append(weatherForecast.list[index * 8].main.temp_min);
//             });
//
//             ["#day1-humidity", "#day2-humidity", "#day3-humidity", "#day4-humidity", "#day5-humidity"].forEach((selector, index) => {
//                 document.querySelector(selector).append(weatherForecast.list[index * 8].main.humidity);
//             });
//
//             ["#day1-conditions", "#day2-conditions", "#day3-conditions", "#day4-conditions", "#day5-conditions"].forEach((selector, index) => {
//                 document.querySelector(selector).append(weatherForecast.list[index * 8].wind.speed);
//             });
//
//             ["#day-1", "#day-2", "#day-3", "#day-4", "#day-5"].forEach((selector, index) => {
//                 document.querySelector(selector).append(weatherForecast.list[index * 8].dt_txt);
//             });
//         })
//         .catch(error => console.log(error));
//
//
// // 1)Recreate the map below your 5 day forecast.
// // 2) Read the documentation and figure out how to allow the user to drop a pin on any place on the map.
// // 3) Once the user drops a pin, grab its coordinates and feed those into your OpenWeatherMap API.
// // 4)Update the five-day forecast with the information from those coordinates
// // (you should also get rid of your input boxes at this point).
//
//
// //Map box with  marker
//
//     mapboxgl.accessToken = MAPBOX_KEY;
//     let map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         zoom: 8,
//         center: [-77.333, 42.2667,]
//     });
//
//     var marker = new mapboxgl.Marker()
//         .setLngLat({lon: -77.333, lat: 42.2667})
//         .addTo(map);
//
//     marker.setDraggable(true);
//
//     marker.on("dragend", (e) =>{
//         let lngLat = marker.getLngLat()
//         weatherOptions(lngLat.lng, lngLat.lat)
//
//     })
//
//
//
// })()



//1. Add input that will represent the search bar along with the button that will trigger the search function.
// 2.Make sure to include the geocode function
// 3.Create click functionality for the search button
//4.Inside of the click function grab the text from the search bar and store it in a variable.
// 5. using the geocode function you brought in on step 2 pass the information you stored in the variable from the previous step into the geocode function.
//     map.on("click", (e) => {
//         console.log(e)
//     });
//     map.on("click",function (mapEvent){
//         console.log(mapEvent);
//         const {lat, lng} = mapEvent.latlng;
//     })
// let lng = (e.lngLat.lng);
// let lat = (e.lngLat.lat);
// reverseGeocode({lng: lng, lat: lat}, MAPBOX_KEY)

(function() {
    "use strict"



// Wait for DOM to load before running script
$(document).ready(function () {

    // Create a map and add it to the page
    mapboxgl.accessToken = MAPBOX_KEY;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-77.333, 42.2667], // "Steuben, US
        zoom: 9
    });

    // Add zoom and rotation controls to the map
    map.addControl(new mapboxgl.NavigationControl());

    var marker = new mapboxgl.Marker()
        .setLngLat({lon: -77.333, lat: 42.2667})
        .addTo(map);

    marker.setDraggable(true);

    marker.on("dragend", (e) =>{
        // if (marker){
        //     marker.remove();
        // }
        let lngLat = marker.getLngLat()
        weatherOptions(lngLat.lng, lngLat.lat)

    })



    // Set up the initial weather forecast
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: "Steuben, US",
        units: "imperial"
    }).done(function (weatherForecast) {
        console.log(weatherForecast);


        // update the forecast for the next 5 days

        // This is for the max temp
        document.querySelector("#day1-max").innerHTML = weatherForecast.list[0].main.temp_max;
        document.querySelector("#day2-max").innerHTML = weatherForecast.list[8].main.temp_max;
        document.querySelector("#day3-max").innerHTML = weatherForecast.list[16].main.temp_max;
        document.querySelector("#day4-max").innerHTML = weatherForecast.list[24].main.temp_max;
        document.querySelector("#day5-max").innerHTML = weatherForecast.list[32].main.temp_max;
        //this is for min temp
        document.querySelector("#day1-min").innerHTML = weatherForecast.list[0].main.temp_min;
        document.querySelector("#day2-min").innerHTML = weatherForecast.list[8].main.temp_min;
        document.querySelector("#day3-min").innerHTML = weatherForecast.list[16].main.temp_min;
        document.querySelector("#day4-min").innerHTML = weatherForecast.list[24].main.temp_min;
        document.querySelector("#day5-min").innerHTML = weatherForecast.list[32].main.temp_min;
        // This is for humidity
        document.querySelector("#day1-humidity").innerHTML = weatherForecast.list[0].main.humidity;
        document.querySelector("#day2-humidity").innerHTML = weatherForecast.list[8].main.humidity;
        document.querySelector("#day3-humidity").innerHTML = weatherForecast.list[16].main.humidity;
        document.querySelector("#day4-humidity").innerHTML = weatherForecast.list[24].main.humidity;
        document.querySelector("#day5-humidity").innerHTML = weatherForecast.list[32].main.humidity;
        //This is for the conditions
        document.querySelector("#day1-conditions").innerHTML = weatherForecast.list[0].weather[0].description;
        document.querySelector("#day2-conditions").innerHTML = weatherForecast.list[8].weather[0].description;
        document.querySelector("#day3-conditions").innerHTML = weatherForecast.list[16].weather[0].description;
        document.querySelector("#day4-conditions").innerHTML = weatherForecast.list[24].weather[0].description;
        document.querySelector("#day5-conditions").innerHTML = weatherForecast.list[32].weather[0].description;
        //This is the day above all
        document.querySelector("#day-1").innerHTML = weatherForecast.list[0].dt_txt;
        document.querySelector("#day-2").innerHTML = weatherForecast.list[8].dt_txt;
        document.querySelector("#day-3").innerHTML = weatherForecast.list[16].dt_txt
        document.querySelector("#day-4").innerHTML = weatherForecast.list[24].dt_txt;
        document.querySelector("#day-5").innerHTML = weatherForecast.list[24].dt_txt;
        document.querySelector("#day-5").innerHTML = weatherForecast.list[32].dt_txt;


        // Update the weather icons for the next 5 days
        let icons = [
            weatherForecast.list[0].weather[0].icon,
            weatherForecast.list[8].weather[0].icon,
            weatherForecast.list[16].weather[0].icon,
            weatherForecast.list[24].weather[0].icon,
            weatherForecast.list[32].weather[0].icon
        ];

        $('.logo').each(function (index) {
                let picture = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[index].weather[0].icon}.png">`
            $(this).html(picture)
    }
    );

    // $('.logo').html(picture);
    // console.log(picture)

    // Add event listener to the map to allow users to drop a pin and update the forecast
    map.on('click', function (event) {
        var marker = new mapboxgl.Marker()
            .setLngLat(event.lngLat)
            .addTo(map);
        console.log(event.lngLat);

        //Remove previous marker if there is one
        if (marker){
            marker.remove();
        }
        var marker = new mapboxgl.Marker()
            .setLngLat(event.lngLat)
            .addTo(map);
        console.log(event.lngLat);
        // remove input boxes
        // $('#user-city').remove();
        // $('#submit').remove();



        // reverse geocode to get the city name
        let geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.lngLat.lng},${event.lngLat.lat}.json?access_token=${MAPBOX_KEY}`;

        $.get(geocodeURL).done(function (data) {
            console.log(data);
            let city = data.features[0].text;
            console.log(city);
            $('#location').text(city);

            // // get weather data based on new coordinates
            let lat = event.lngLat.lat;
            let lon = event.lngLat.lng;

            $.get("https://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                lat: lat,
                lon: lon,
                units: "imperial"
            }).done(function (weatherForecast) {
                console.log(weatherForecast);
                //
                //     // update the forecast for the next 5 days
                document.querySelector("#day1-max").innerHTML = weatherForecast.list[0].main.temp_max;
                document.querySelector("#day2-max").innerHTML = weatherForecast.list[8].main.temp_max;
                document.querySelector("#day3-max").innerHTML = weatherForecast.list[16].main.temp_max;
                document.querySelector("#day4-max").innerHTML = weatherForecast.list[24].main.temp_max;
                document.querySelector("#day5-max").innerHTML = weatherForecast.list[32].main.temp_max;

                document.querySelector("#day1-min").innerHTML = weatherForecast.list[0].main.temp_min;
                document.querySelector("#day2-min").innerHTML = weatherForecast.list[8].main.temp_min;
                document.querySelector("#day3-min").innerHTML = weatherForecast.list[16].main.temp_min;
                document.querySelector("#day4-min").innerHTML = weatherForecast.list[24].main.temp_min;
                document.querySelector("#day5-min").innerHTML = weatherForecast.list[32].main.temp_min;

                document.querySelector("#day1-humidity").innerHTML = weatherForecast.list[0].main.humidity;
                document.querySelector("#day2-humidity").innerHTML = weatherForecast.list[8].main.humidity;
                document.querySelector("#day3-humidity").innerHTML = weatherForecast.list[16].main.humidity;
                document.querySelector("#day4-humidity").innerHTML = weatherForecast.list[24].main.humidity;
                document.querySelector("#day5-humidity").innerHTML = weatherForecast.list[32].main.humidity;

                document.querySelector("#day1-conditions").innerHTML = weatherForecast.list[0].weather[0].description;
                document.querySelector("#day2-conditions").innerHTML = weatherForecast.list[8].weather[0].description;
                document.querySelector("#day3-conditions").innerHTML = weatherForecast.list[16].weather[0].description;
                document.querySelector("#day4-conditions").innerHTML = weatherForecast.list[24].weather[0].description;
                document.querySelector("#day5-conditions").innerHTML = weatherForecast.list[32].weather[0].description;

                document.querySelector("#day-1").innerHTML = weatherForecast.list[0].dt_txt;
                document.querySelector("#day-2").innerHTML = weatherForecast.list[8].dt_txt;
                document.querySelector("#day-3").innerHTML = weatherForecast.list[16].dt_txt;
                document.querySelector("#day-4").innerHTML = weatherForecast.list[24].dt_txt;
                document.querySelector("#day-5").innerHTML = weatherForecast.list[32].dt_txt;

                $('.logo').each(function (index) {
                    let picture = `<img src= "https://openweathermap.org/img/w/${weatherForecast.list[index].weather[0].icon}.png">`
                    $(this).html(picture)
                })


            });
        });
    });
})});
})()