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
            weatherObj[i].timeStamp = data.list[i].dt
            weatherObj[i].tempMin = data.list[i].main.temp_min
            weatherObj[i].tempMax = data.list[i].main.temp_max
                weatherObj[i].description = data.list[i].weather[0].description
            weatherObj[i].wind = data.list[i].wind.speed
                weatherObj[i].pressure = data.list[i].main.pressure

            //adding data to html
            let divId="#day0"+ (i + 1);
            $(divId + ' .card-body .time').html('maxTemp: ' +  weatherObj[i].tempMax +'°F')
            $(divId + ' .card-body .card-text').html(weatherObj[i].description)
            $(divId + ' .card-body .maxTemp').html('maxTemp: ' +  weatherObj[i].tempMax +'°F')

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





});


