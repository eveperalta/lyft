/* todas las funciones del mapa*/

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: {
      lat: -33.437411,
      lng: -70.650146
    },
    zoom: 16
  }
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(change_map);
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
    google.maps.event.addDomListener(window, 'load', myMap);

function change_map(position){
  var latlng = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

};
