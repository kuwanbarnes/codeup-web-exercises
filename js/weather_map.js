'use strict';

$(document).ready(function (){
    $.get("https://api.openweathermap.org/data/2.5/forecast",{
        APPID:OPEN_WEATHER_APPID,
        q: "San Antonio, US",
        units: "imperial"
        }).done(function (data){
            console.log(data)
        var weatherObj={}
        for (var i =0;i<5; i++) {
            weatherObj[i]={}
            weatherObj[i].tempMin = data.list[i].main.temp_min
            weatherObj[i].tempMax = data.list[i].main.temp_max,
                weatherObj[i].description = data.list[i].weather[0].description
            weatherObj[i].wind = data.list[i].wind.speed,
                weatherObj[i].tempMax = data.list[i].main.pressure
        }
        console.log(weatherObj)
        console.log(weatherObj[1])
        var cards =$('.card-body')
        $('#day01').children().html(weatherObj[0])
        $('#day02').children().html(weatherObj[1])
        $('#day03').append(weatherObj[2])
        $('#day04').append(weatherObj[3])
        $('#day05').append(weatherObj[4])
    })





});


