function initMap() {
    // Store location (example: Nike store in New York)
    var storeLocation = { lat: 40.758896, lng: -73.985130 }; 

    // Create a new map and place it in the 'map' div
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: storeLocation
    });

    // Add a marker for the store location
    var marker = new google.maps.Marker({
        position: storeLocation,
        map: map
    });
}
