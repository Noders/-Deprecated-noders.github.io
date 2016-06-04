import style from './map_style';
import locs from './map_locs';

class GoogleMapAPI {
  constructor(dom, options) {
    google.maps.event.addDomListener(window, "load", this.initialize);
    this.initialize(dom, options);
  }

  initialize(dom, options){
    this.map = new google.maps.Map(dom, options);
  }

  static main() {
    var styledMap = new google.maps.StyledMapType(style, {name: "Styled Map"});

    let GoogleMap = new GoogleMapAPI(document.getElementById('map'), {
      center: new google.maps.LatLng(-10.9, -70.4),
      zoom: 2
    });
    var map = GoogleMap.map;
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    locs.forEach(function(el){
      var myLatlng = new google.maps.LatLng(el.lat, el.lon);
      var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
      });
      marker.setMap(map);
    });
  }
}

GoogleMapAPI.main();
