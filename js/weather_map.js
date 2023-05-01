
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID ,
    q:     "Steuben, US",
    units: "imperial",
    lat :   42.2667,
    lon:    -77.333

}).done(function(weatherForecast) {
    console.log(weatherForecast);
    console.log(weatherForecast.list[0].main.temp);
    console.log(weatherForecast.list[1].main.temp)
    console.log(weatherForecast.list[2].main.temp)
    console.log(weatherForecast.list[3].main.temp)
    console.log(weatherForecast.list[4].main.temp)
    //THIS IS WHERE THE CODE LIVES
    // use query selector and try to append it to the card



});

console.log(MAPBOX_KEY)
mapboxgl.accessToken = MAPBOX_KEY;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 11,
    center: [-77.333, 42.2667,]

});
