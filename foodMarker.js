var you;
var geocoder;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var MIT = new google.maps.LatLng(42.3598,-71.0921);
  var mapOptions = {
    zoom: 15,
    center: MIT
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
 //setMarkers(map, foodMarkers);
}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
/*
var food = [];

var foodPoints = function(name, allergies, streetNumber, address, city, state, zip) {
      name: name,
      allergies: allergies,
      streetNumber: streetNumber,
      address: address,
      city: city,
      state: state,
      zip: zip,
  };

function setMarkers(map, locations) {
  for (var i = 0; i < locations.length; i++) {
    var food = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        shape: shape,
        title: food.name,
    });
  }
}*/

google.maps.event.addDomListener(window, 'load', initialize);
