var React = require('react');
var comunidadesArr = require('../api/comunidades');
var map;

var MarkerArrs = [];
var GoogleMap = React.createClass({
  getInitialState: function () {
    return { info: {} };
  },
  componentDidMount: function () {
    map = new google.maps.Map(document.getElementById('googleMap'), {
      center: {
        lat: -16.0, 
        lng: -70.0
      },
      zoom: 2
    });
    comunidadesArr.forEach(function(el,i,as){
      var marker = new google.maps.Marker({
        position: el.geo,
        map: map,
        title: el.name
      });
    });
  },

  render: function() {        
    return (
      <div className="container-wrapper light">
          <div className="container animated fadeInLeft " ng-show="partners">
              <div className="map">
                  <div className="row">
                      <div className="col-lg-12">
                          <h1 className="page-header col-xs-10 col-xs-offset-1"> Somos Globales <i className="fa fa-fw fa-globe icon globe"></i></h1>
                          <div className="col-xs-10 col-xs-offset-1 mapContainer">
                            <div id="googleMap">
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = GoogleMap;