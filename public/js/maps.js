google.maps.visualRefresh = true;


function initialize() {
  var municipio = new google.maps.LatLng(45.332017, 12.048785);
  var sagredo   = new google.maps.LatLng(45.390933, 11.999047);
  var point     = new google.maps.LatLng(45.350933, 11.999047);
  var mapOptions = {
    scrollwheel: false,
    zoom: 12,
    center: point,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h3 id="firstHeading" class="firstHeading">Municipio</h1>'+
  '</div>';
  var contentString1 = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h3 id="firstHeading" class="firstHeading">Villa Sagredo</h1>'+
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
    title: 'Municipio'
  });
  var marker1 = new google.maps.Marker({
    position: sagredo,
    animation: google.maps.Animation.DROP,
    map: map,
    title: 'Villa Sagredo'
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map,marker1);
  });

}


google.maps.event.addDomListener(window, 'load', initialize);
