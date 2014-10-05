var map;
var geocoder;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var MIT = new google.maps.LatLng(42.3598,-71.0921);
  var mapOptions = {
    zoom: 16,
    center: MIT
  }
  map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

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
	["LaVerde's Market", 42.359102, -71.094668, ['84 Massachusetts Ave','Cambridge', 'MA', 02139]],
	["Star Market", 42.361702, -71.100590, ['20 Sidney St','Cambridge', 'MA', 02139]],
	["Shalimar", 42.365095, -71.102607, ['571 Massachusetts Ave','Cambridge', 'MA', 02139]],
	["Whole Foods", 42.368012, -71.102392, ['115 Prospect St','Cambridge', 'MA', 02139]],
	["7-11", 42.363161, -71.093423, ['600 Technology Square','Cambridge', 'MA', 02139]]
  ];

var cat = "cat.png";
var catPos = new google.maps.LatLng(42.353996, -71.070163);
var catMark = new google.maps.Marker({
  position: catPos,
  map: map,
  title: 'cat'
});
/*
google.maps.event.addListener(catMark, 'click', function(){
  var infowindow = new google.maps.InfoWindow(
      { content: 'MEOW!',
        size: new google.maps.Size(500,500)
      });
  infowindow.open(map, catMark);
});
*/
function setMarkers(map, locations) {
  for (var i = 0; i < locations.length; i++) {
    var food = locations[i];
    var myLatLng = new google.maps.LatLng(food[1], food[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: food[0]
    });
    attachInfo(marker, i);
  }
}

function attachInfo(marker, n) {
  var locker = foodMarkers[n];
  var address = locker[3];
  var infowindow = new google.maps.InfoWindow(
      { content: locker[0],
        size: new google.maps.Size(500,500)
      });
  google.maps.event.addListener(marker, 'click', function() {
      var iWC = infowindow.getContent();

      iWC = '<div><h1 font-size: >' + locker[0]  + '</h1><div><p>' + address[0] + '</p><p>'
	    + address[1] + ', ' + address[2] + ' ' + address[3] + '</p></div></div>';

      infowindow.setContent(iWC);
      infowindow.open(map,marker);
      
      var thisAddress = address[0] + ', ' + address[1] + ', ' + address[2] + ' ' + address[3];
      setAddress(thisAddress);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
