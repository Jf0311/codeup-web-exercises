(function () {
    "use strict"


// Wait for DOM to load before running script
    $(document).ready(function () {


        let marker;

        $("#searchButton").on("click", () => {
            console.log("click")
            console.log($("#locationInput").val())
            const input = $("#locationInput").val()
            geocode(input, MAPBOX_KEY).then(res => {
                console.log(res)
                if (marker) {
                    marker.remove();
                }
                marker = new mapboxgl.Marker()
                    .setLngLat(res)
                    .addTo(map);
                map.setCenter(res);
                map.setZoom(4);
            })

        })

        // Create a map and add it to the page
        mapboxgl.accessToken = MAPBOX_KEY;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-77.333, 42.2667], // "Steuben, US
            zoom: 4
        });


        // Add zoom and rotation controls to the map
        map.addControl(new mapboxgl.NavigationControl());

        marker = new mapboxgl.Marker()
            .setLngLat({lon: -77.333, lat: 42.2667})
            .addTo(map);


        marker.setDraggable(true);



        marker.on("dragend", (e) => {
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


            // Add event listener to the map to allow users to drop a pin and update the forecast
            map.on('click', function (event) {


                //Remove previous marker if there is one
                if (marker) {
                    marker.remove();
                }
                marker = new mapboxgl.Marker()
                    .setLngLat(event.lngLat)
                    .addTo(map);


                // reverse geocode to get the city name
                let geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.lngLat.lng},${event.lngLat.lat}.json?access_token=${MAPBOX_KEY}`;

                $.get(geocodeURL).done(function (data) {
                    console.log(data);
                    let city = data.features[0].text;
                    console.log(city);
                    $('#location').text(city);

                    // get weather data based on new coordinates
                    let lat = event.lngLat.lat;
                    let lon = event.lngLat.lng;

                    $.get("https://api.openweathermap.org/data/2.5/forecast", {
                        APPID: OPEN_WEATHER_APPID,
                        lat: lat,
                        lon: lon,
                        units: "imperial"
                    }).done(function (weatherForecast) {
                        console.log(weatherForecast);
                            // update the forecast for the next 5 days
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
        })
    });
})()