// Page dropdown and buttons
var zoomSelect = document.getElementById("zoom-select")
zoomSelect.addEventListener("change", function (event) {
    var zoomValue = zoomSelect.options[zoomSelect.selectedIndex].value;
    map.setZoom(parseInt(zoomValue));
})

var styleSelect = document.getElementById("style-select")
styleSelect.addEventListener("change", function (event) {
    var styleValue = styleSelect.options[styleSelect.selectedIndex].value;
    var styleString = "mapbox://styles/mapbox/" + styleValue;
    map.setStyle(styleString);
})

var resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", function (event) {
    map.setZoom(10);
    map.setCenter([-98.4916, 29.4252]);
    map.setStyle('mapbox://styles/mapbox/streets-v9');
    marker.setLngLat([-98.4916, 29.4252]);
    popup.setText("Codeup");
    //TODO: RESET the dropdown to initial option
    //TODO: RESET style dropdown to initial option
});
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).
//initialize the map
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
    center:[-98.4916, 29.4252],
    zoom:20,
    bearingSnap: 7
});

var marker = new mapboxgl.Marker({
    color:"blue",
    icon:"bike"
})

    .setLngLat([-98.416045,29.5029648])
    .addTo(map);
var marker2 = new mapboxgl.Marker({
    color:"red"
})
    .setLngLat([-98.4055947,29.5104626])
    .addTo(map);
var marker3 = new mapboxgl.Marker({
    color:"green"
})
    .setLngLat([ -98.46517990628097, 29.51909969374734])
    .addTo(map);

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.
geocode("104 Lanark Dr,San Antonio,Texas 78218",mapboxToken)
    .then(function (result){
        console.log(result);
        map.setCenter(result);//map.setCenter([-98.489615, 29.426827])
        map.setZoom(1);
        marker.setLngLat(result)
        map.setCenter(result);
        var codeupPopup1=new mapboxgl.Popup()
            .setHTML("<p>BIG BIBBS</p>")
            .addTo(map);
        marker.on('click',codeupPopup1);
    })
geocode("4453 Walzem Rd,San Antonio,Texas 78218",mapboxToken)
    .then(function (result){
        console.log(result);
        map.setCenter(result);//map.setCenter([-98.489615, 29.426827])
        map.setZoom(13);
        marker2.setLngLat(result)
        map.setCenter(result);
        var codeupPopup2=new mapboxgl.Popup()
            .setHTML("<p>Wayne's Wings</p>")
            .addTo(map);
        marker2.setPopup(codeupPopup2);
    })
geocode("8402 Broadway, San Antonio, TX 78209",mapboxToken)
    .then(function (result){
        console.log(result);
        map.setCenter(result);//map.setCenter([-98.489615, 29.426827])
        map.setZoom(13);
        marker3.setLngLat(result)
        map.setCenter(result);
        var codeupPopup=new mapboxgl.Popup()
            .setHTML("<p>Raising Cane's</p>")
            .addTo(map);
        marker3.setPopup(codeupPopup)
    })
marker.on('click',"codeupPop1")