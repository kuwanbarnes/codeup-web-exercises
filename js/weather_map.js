'use strict';

$(document).ready(function data() {
    $.get("https://api.openweathermap.org/data/2.5/forecast/", {
        APPID: OPEN_WEATHER_APPID,
        q: "San Antonio, US",
        units: "imperial",
        exclude: 'minutely,hourly'
    }).done(function (data) {
        console.log(data)
        var dayCount = 1
        for (var i = 0; i < 40; i++) {
            if (i % 8 === 0) {
                var weatherObj = {
                    timeStamp: data.list[i].dt_txt,
                    tempMin: data.list[i].main.temp_min,
                    tempMax: data.list[i].main.temp_max,
                    description: data.list[i].weather[0].description,
                    humidity: data.list[i].main.humidity,
                    wind: data.list[i].wind.speed,
                    pressure: data.list[i].main.pressure,
                    city: data.city.name,
                    icon: data.list[i].weather[0].icon
                }

                console.log(weatherObj)

                //adding data to html
                let divId = "#day0" + dayCount;
                dayCount++
                $(divId + '.card_container .card-header').html(data.list[i].dt_txt)
                $(divId + ' .card-body .maxTemp').html(weatherObj.tempMin + '°F' + '/' + weatherObj.tempMax + '°F')
                let iconUrl = `https://openweathermap.org/img/wn/${weatherObj.icon}@2x.png`
                let iconImage = `<img src= ${iconUrl} width="50" height="50" alt="">`
                $(divId + ' .card-body .img').html(iconImage)
                $(divId + ' .card-body .description').html('description: ' + weatherObj.description)
                $(divId + ' .card-body .humidity').html('Humidity: ' + weatherObj.humidity + '%')
                $(divId + ' .card-body .wind').html('Wind: ' + weatherObj.wind)
                $(divId + ' .card-body .pressure').html('Pressure: ' + weatherObj.pressure)
                $('.container-fluid .current-city').html('current city: ' + weatherObj.city)

                if (i === 1) {
                    console.log(weatherObj)
                    console.log(divId)
                }
            }
        }
        // console.log(weatherObj)


        // $('#day02').html(weatherObj[1])
        // $('#day03').append(weatherObj[2])
        // $('#day04').append(weatherObj[3])
        // $('#day05').append(weatherObj[4])


        // $(".card-body .img").append(iconImage);
    })


    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
        center: [-98.4916, 29.4252],
        zoom: 3,
        interactive: true,
        hash: true,
        bearingSnap: 7
    });

    var marker = new mapboxgl.Marker({
        color: "blue",
        icon: "bike",
        draggable: true
    })

        .setLngLat([-98.416045, 29.5029648])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);
    var geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });
// Add the control to the map.
    map.addControl(geolocate);
// Set an event listener that fires
// when a geolocate event occurs.
    geolocate.on('geolocate', function () {
        console.log('A geolocate event has occurred.')
    });

    // var submitButton = document.querySelector('#button');
    // submitButton.addEventListener('click', data);
    $('#button').click(function (e) {
        e.preventDefault();
        let search = $('#input').val();
        console.log(search);
        geocode(search,mapboxToken);
    });

    function geocode(search,token) {

        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        var resData = [];
        return fetch(baseUrl + endPoint + search + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                // console.log(res);

                return res.json();
                // to get all the data from the request, comment out the following three lines...


            }).then(function (data) {
                resData=data.features[0].center;
                // console.log(resData);
                // console.log( data.features[0].center)
                $.get("https://api.openweathermap.org/data/2.5/forecast/", {
                    APPID: OPEN_WEATHER_APPID,
                  lat:resData[1],
                    lon:resData[0],
                    // q: search,
                    units: "imperial",
                    exclude: 'minutely,hourly'
                }).done(function (data){
                    var dayCount = 1;
                    for (var i = 0; i < 40; i++) {
                        if (i % 8 === 0) {
                            var weatherObj = {
                                timeStamp: data.list[i].dt_txt,
                                tempMin: data.list[i].main.temp_min,
                                tempMax: data.list[i].main.temp_max,
                                description: data.list[i].weather[0].description,
                                humidity: data.list[i].main.humidity,
                                wind: data.list[i].wind.speed,
                                pressure: data.list[i].main.pressure,
                                city: data.city.name,
                                icon: data.list[i].weather[0].icon
                            }

                            console.log(data.list[i].dt_txt)

                            //adding data to html
                            let divId = "#day0" + dayCount;
                            dayCount++
                            // $('.container .card-header').html(weatherObj.timeStamp)
                            $(divId + '.card_container .card-header').html(data.list[i].dt_txt)
                            // $(divId + '.card-header').html(data.list[i].dt_txt)
                            $(divId + ' .card-body .maxTemp').html(weatherObj.tempMin + '°F' + '/' + weatherObj.tempMax + '°F')
                            let iconUrl = `https://openweathermap.org/img/wn/${weatherObj.icon}@2x.png`
                            let iconImage = `<img src= ${iconUrl} width="50" height="50" alt="">`
                            $(divId + ' .card-body .img').html(iconImage)
                            $(divId + ' .card-body .description').html('description: ' + weatherObj.description)
                            $(divId + ' .card-body .humidity').html('Humidity: ' + weatherObj.humidity + '%')
                            $(divId + ' .card-body .wind').html('Wind: ' + weatherObj.wind)
                            $(divId + ' .card-body .pressure').html('Pressure: ' + weatherObj.pressure)
                            $('.container-fluid .current-city').html('current city: ' + weatherObj.city)
                            // $('.container .card-header').html(weatherObj.timeStamp)
                            if (i === 1) {
                                console.log(weatherObj)
                                console.log(divId)
                            }
                        }
                    }
                    // console.log(weatherObj)


                    // $('#day02').html(weatherObj[1])
                    // $('#day03').append(weatherObj[2])
                    // $('#day04').append(weatherObj[3])
                    // $('#day05').append(weatherObj[4])


                    // $(".card-body .img").append(iconImage);
                })

                console.log(data);
                })
                return data.features[0].center;

            };

    });




