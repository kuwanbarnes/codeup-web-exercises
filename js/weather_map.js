'use strict';

$(document).ready(function (){
    $.get("https://api.openweathermap.org/data/2.5/forecast",{
        APPID:OPEN_WEATHER_APPID,
        q: "San Antonio, US",
        units: "imperial"
        }).done(function (data){
            console.log(data)
        var weatherObj=[]
        for (var i =0;i<5; i++) {
            weatherObj[i]={}
            weatherObj[i].timeStamp = data.list[i].dt_txt
            weatherObj[i].tempMin = data.list[i].main.temp_min
            weatherObj[i].tempMax = data.list[i].main.temp_max
                weatherObj[i].description = data.list[i].weather[0].description
            weatherObj[i].humidity = data.list[i].main.humidity
            weatherObj[i].wind = data.list[i].wind.speed
                weatherObj[i].pressure = data.list[i].main.pressure
            weatherObj[i].city = data.city.name
            weatherObj[i].icon=data.list[i].weather[0].icon
console.log(weatherObj[i].timeStamp)

            //adding data to html
            let divId="#day0"+ (i + 1);
            $(divId + '.card-header').append(weatherObj[i].timeStamp)
            $(divId + ' .card-body #maxTemp').html(weatherObj[i].tempMin+'°F'+ '/' +  weatherObj[i].tempMax +'°F')
            $(divId + ' .card-body .icon').html(weatherObj[i].icon)
            $(divId + ' .card-body .description').html('description: '+ weatherObj[i].description)
            $(divId + ' .card-body .humidity').html('Humidity: ' + weatherObj[i].humidity)
            $(divId + ' .card-body .wind').html('Wind: ' + weatherObj[i].wind)
            $(divId + ' .card-body .pressure').html('Pressure: '+ weatherObj[i].pressure)
            $('.container-fluid .current-city').html('current city: '+ weatherObj[i].city)
            $('.container .card-header').html(weatherObj[i].timeStamp)
            if(i==1){
                console.log(weatherObj[i])
                console.log(divId)
            }
        }
        console.log(weatherObj)
        console.log(weatherObj[1])


        $('#day02').html(weatherObj[1])
        $('#day03').append(weatherObj[2])
        $('#day04').append(weatherObj[3])
        $('#day05').append(weatherObj[4])
    })





    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
        center:[-98.4916, 29.4252],
        zoom:9,
        interactive: true,
        hash:true,
        bearingSnap: 7
    });

    var marker = new mapboxgl.Marker({
        color:"blue",
        icon:"bike"
    })
        .setLngLat([-98.416045,29.5029648])
        .addTo(map);
});


