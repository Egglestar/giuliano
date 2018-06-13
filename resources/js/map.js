// Map aufrufen

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initMap() {} // now it IS a function and it is in global


function initMap() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom:7,
    center: chicago
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}


/* function initMap() {} // now it IS a function and it is in global

  initMap = function() {
    var giuliano = {lat: 39.84982, lng: 18.336944};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: giuliano,
      zoom: 12
    });
      // marker der karte hinzufügen
    var marker = new google.maps.Marker({
            position: giuliano,
            map: map
          });

    //
      // info der der karte zufügen
    var infoWindow = new google.maps.InfoWindow({map: map});
            infoWindow.setPosition(giuliano);
            infoWindow.setContent('Masseria Prontera in Giuliano di Lecce');
            map.setCenter(giuliano);
  }; */
