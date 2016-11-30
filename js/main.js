$("#demo").intlTelInput();/* codigo para activar las banderas en el input tel del sign up*/

/*aqui el codigo para los botones del navbar en el mapa*/

var activeEl = 2;
$(function() {
    var items = $('.btn-nav');
    $( items[activeEl] ).addClass('active');
    $( ".btn-nav" ).click(function() {
        $( items[activeEl] ).removeClass('active');
        $( this ).addClass('active');
        activeEl = $( ".btn-nav" ).index( this );
    });
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
};


/* todas las funciones del mapa*/
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(-33.448412, -70.671136), 
    zoom: 10
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

    google.maps.event.addDomListener(window, 'load', initMap);


var x = document.getElementById("map");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
};
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center= "+latlon+"&zoom=14&size=400x300&sensor=false";

    document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}

 