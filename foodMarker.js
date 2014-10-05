var you;
var geocoder;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var MIT = new google.maps.LatLng(42.3598,-71.0921);
  var mapOptions = {
    zoom: 17,
    center: MIT
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

var codeAddress = function() {
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
 setMarkers(map, foodMarkers);
}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */

var foodMarkers = [
        ["LaVerde's Market", 42.359102, -71.094668],
        ["Star Market", 42.361702, -71.100590],
        ["Shalimar", 42.365095, -71.102607],
        ["Whole Foods", 42.368012, -71.102392],
        ["7-11", 42.363161, -71.093423]
  ];

function setMarkers(map, locations) {
  for (var i = 0; i < locations.length; i++) {
    var food = locations[i];
    var myLatLng = new google.maps.LatLng(food[1], food[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: food[0]
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
