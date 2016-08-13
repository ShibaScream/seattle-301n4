function initMap() {

  // HI JR

  var styles = [

    // hide Google's labels
    {
      featureType: 'all',
      elementType: 'labels',
      stylers: [
          {visibility: 'off'}
      ]
    },

    // hide roads
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
          {visibility: 'off'}
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

function createMarker(data) {
  // TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.
  var position = {
    lat: data.latitude,
    lng: data.longitude
  };

  var label = data.city + ', ' + data.state;

  var marker = new google.maps.Marker({
    position: position,
    animation: google.maps.Animation.DROP,
    maps: window.mapobj,
    title: label
  });

  window.mapobj.panTo(position);

  marker.setMap(window.mapobj);

}
