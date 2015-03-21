google.maps.visualRefresh = true;

function initialize() {
  var municipio = new google.maps.LatLng(-4.527074, -37.699361);
  var sagredo   = new google.maps.LatLng(-4.525972, -37.704368);
  var point     = new google.maps.LatLng(-4.527074, -37.699361);
  var mapOptions = {
    scrollwheel: false,
    zoom: 16,
    center: point,
    zoomControl: false,
    draggable: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.MAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h3 id="firstHeading" class="firstHeading">Igrejinha</h3>'+
  '</div>';
  var contentString1 = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h3 id="firstHeading" class="firstHeading">La Trattoria</h3>'+
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });


  var marker = new google.maps.Marker({
    position: municipio,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Igreja'
  });
  var marker1 = new google.maps.Marker({
    position: sagredo,
    animation: google.maps.Animation.DROP,
    map: map,
    title: 'La Trattoria'
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map, marker1);
  });

}


google.maps.event.addDomListener(window, 'load', initialize);
