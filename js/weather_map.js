
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID ,
    q:     "Steuben, US",
    units: "imperial",
    lat :   42.2667,
    lon:    -77.333

}).done(function(weatherForecast) {
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
    document.querySelector("#day1-max").append(weatherForecast.list[0].main.temp_max) ;
    document.querySelector("#day2-max").append(weatherForecast.list[1].main.temp_max) ;
    document.querySelector("#day3-max").append(weatherForecast.list[2].main.temp_max) ;
    document.querySelector("#day4-max").append(weatherForecast.list[3].main.temp_max) ;
    document.querySelector("#day5-max").append(weatherForecast.list[4].main.temp_max) ;
    //this is for min temp
    document.querySelector("#day1-min").append(weatherForecast.list[0].main.temp_min) ;
    document.querySelector("#day2-min").append(weatherForecast.list[1].main.temp_min) ;
    document.querySelector("#day3-min").append(weatherForecast.list[2].main.temp_min) ;
    document.querySelector("#day4-min").append(weatherForecast.list[3].main.temp_min) ;
    document.querySelector("#day5-min").append(weatherForecast.list[4].main.temp_min) ;
    // This is for humidity
    document.querySelector("#day1-humidity").append(weatherForecast.list[0].main.humidity) ;
    document.querySelector("#day2-humidity").append(weatherForecast.list[1].main.humidity) ;
    document.querySelector("#day3-humidity").append(weatherForecast.list[2].main.humidity) ;
    document.querySelector("#day4-humidity").append(weatherForecast.list[3].main.humidity) ;
    document.querySelector("#day5-humidity").append(weatherForecast.list[4].main.humidity) ;
    //This is for wind speed
    document.querySelector("#day1-conditions").append(weatherForecast.list[0].wind.speed) ;
    document.querySelector("#day2-conditions").append(weatherForecast.list[1].wind.speed) ;
    document.querySelector("#day3-conditions").append(weatherForecast.list[2].wind.speed) ;
    document.querySelector("#day4-conditions").append(weatherForecast.list[3].wind.speed) ;
    document.querySelector("#day5-conditions").append(weatherForecast.list[4].wind.speed) ;
    //This is for the day of the week
    document.querySelector("#day-1").append(weatherForecast.list[0].dt_txt) ;
    document.querySelector("#day-2").append(weatherForecast.list[8].dt_txt) ;
    document.querySelector("#day-3").append(weatherForecast.list[16].dt_txt) ;
    document.querySelector("#day-4").append(weatherForecast.list[24].dt_txt) ;
    document.querySelector("#day-5").append(weatherForecast.list[32].dt_txt) ;
   //
   //  document.querySelector(".logo").append(`${picture}`);
    $('.logo').html(picture)
    // $('.logo').html(picture1)
    // $('.logo').html(picture2)
    // $('.logo').html(picture3)
    // $('.logo').html(picture4)


    //$('#weather').append("<div class='weatherCards'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +
});

console.log(MAPBOX_KEY)
mapboxgl.accessToken = MAPBOX_KEY;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 11,
    center: [-77.333, 42.2667,]


});

