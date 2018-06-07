// Map aufrufen

function initMap() {} // now it IS a function and it is in global

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

      // info der der karte zufügen
    /*var infoWindow = new google.maps.InfoWindow({map: map});
            infoWindow.setPosition(giuliano);
            infoWindow.setContent('Masseria Prontera in Giuliano di Lecce');
            map.setCenter(giuliano);*/
  };
