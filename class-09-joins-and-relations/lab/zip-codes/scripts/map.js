var lastOpenInfoWindow,
  markers = [];

function initMap() {

  // HI JR

  var styles = [

    // hide Google's labels
    {
      featureType: 'all',
      elementType: 'labels',
      stylers: [
        {visibility: "off"}
      ]
    },

    // hide roads
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {visibility: "off"}
      ]
    }

  ];

  var options = {
    center: {lat: 47.611435, lng: -122.330456},
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    maxZoom: 14,
    panControl: true,
    styles: styles,
    zoom: 8,
    zoomControl: true,
    scrollwheel: true
  };

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), options);

  window.mapobj = map;
}

function hideLastInfoWindow() {
  if (lastOpenInfoWindow) {
    lastOpenInfoWindow.close();
    lastOpenInfoWindow = null;
  }
}

function removeMarkers() {
  markers.forEach(function (marker) {
    marker.setMap(null);
  });
  
  markers = [];
}

function createMarker(data) {
  var position = {
    lat: data.latitude,
    lng: data.longitude
  };

  var label = data.city + ', ' + data.state;
  
  var content = '<h3>Name: ' + label + '</h3><ul><li>Population: ' + data.population + '</li><li>Zip Code: ' + data.zip + '</li><li>Latitude: ' + data.latitude + '</li><li>Longitude: ' + data.longitude + '</li></ul>';
  
  var marker = new google.maps.Marker({
    position: position,
    animation: google.maps.Animation.DROP,
    maps: window.mapobj,
    title: label
  });
  
  var infoWindow = new google.maps.InfoWindow({
    content: content
  });
  
  window.mapobj.panTo(position);
  
  marker.addListener('click', function () {
    hideLastInfoWindow();
    infoWindow.open(window.mapobj, marker);
    lastOpenInfoWindow = infoWindow;
  });
  
  markers.push(marker);
  
  marker.setMap(window.mapobj);

}
