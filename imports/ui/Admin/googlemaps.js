import { Template } from 'meteor/templating';

 import './admin.js';
 import '../Others/routes.js';
 import './googlemaps.html';

if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.map.onCreated(function() {

    GoogleMaps.ready('map', function(map) {
      // Create and move the marker when latLng changes.
        var latLng = Geolocation.latLng();
        
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latLng.lat, latLng.lng),
            map: map.instance
          }); 

          var marker1 = new google.maps.Marker({
            //We can enter Latitude and Longitude of a specific location
            position: new google.maps.LatLng(-37.846740,145.115113),
            map:map.instance,
            label:'Deakin University'
          });
         
          var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(-37.819221,145.121157),
            map:map.instance,
            label:'Box Hill Station'
          });
          
      
     
      
    });
  });

  Template.map.helpers({
    mapOptions: function() {
      var latLng = Geolocation.latLng();
      // Initialize the map once we have the latLng.
      if (GoogleMaps.loaded() && latLng) {
        return {
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: 10
        };
      }
    }
  });
}
