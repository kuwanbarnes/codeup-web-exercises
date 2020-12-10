/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).
//initialize the map
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
//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
var marker = new mapboxgl.Marker({
    color:"blue"
})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);
// TODO TOGETHER: Change the color of the marker


// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
// var popup = new mapboxgl.Popup({className:'code-up'})
//     .setLngLat([-98.5235406, 29.4298732])
//     .setHTML("<p>not the best selection</p>")
//     .addTo(map);
// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.

// var alamoPopup=new mapboxgl.Popup()
//     .setHTML("<p>Remember the Alamo!</p>")
//     .addTo(map);
// marker.setPopup(alamoPopup)

// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"
// var popup = new mapboxgl.Popup({className:'code'})
//     .setLngLat([-98.514307,29.546857])
//     .setText("not the best selection")
//     .addTo(map);


/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.
geocode("600 Navarro St #350, San antonio,TX 78205",mapboxToken)
    .then(function (result){
        console.log(result);
        map.setCenter(result);//map.setCenter([-98.489615, 29.426827])
        map.setZoom(20);
        marker.setLngLat(result)
        map.setCenter(result);
var codeupPopup=new mapboxgl.Popup()
    .setHTML("<p>hey code up!</p>")
    .addTo(map);
marker.setPopup(codeupPopup)
})

//TODO: Using the geocode method above, add a marker at Codeup to the map
//TODO: Instead of setCenter try using map.jumpTo()
// geocode("600 Navarro St #350, San antonio,TX 78205",mapboxToken)
//     .then(function (result){
//         console.log(result);
//         map.jumpTo({center:result});//map.setCenter([-98.489615, 29.426827])
//         map.setZoom(20);
//         marker.setLngLat(result)
let searchString= prompt("What would you like to search?");

document.getElementById("search-button").addEventListener("click",
    function () {
        searchString = prompt("What would you like to search?");
        geocode("600 Navarro St #350, San antonio,TX 78205", mapboxToken).then(function (result) {
            console.log(result);
            map.flyTo({
                center: result,
                zoom: 14,
                speed: 1,
                curve: 1
            });
            //map.setCenter([-98.489615, 29.426827])
            // map.setZoom(20);
            marker.setLngLat(result);
        })
    })
//TODO: Instead of setCenter try using map.flyTo()




// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo

reverseGeocode(results,mapboxToken).then(function (placeName){
    popup.setText(placeName);
    marker.setPopup(popup);
})
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


