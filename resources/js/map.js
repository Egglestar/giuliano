// Map aufrufen
function initMap() {
  var giuliano = {lat: 39.84982, lng: 18.336944};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: giuliano,
    zoom: 12
  });
// info der der karte zufügen
  /*var infoWindow = new google.maps.InfoWindow({map: map});
    infoWindow.setPosition(giuliano);
    infoWindow.setContent('Giuliano di Lecce');
            map.setCenter(giuliano);*/

// marker der karte hinzufügen
  var marker = new google.maps.Marker({
          position: giuliano,
          map: map
        });
}
