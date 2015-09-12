var React = require('react');
require('./home.css');
var Noders = require('../Noders/noders.jsx');
var Partners = require('../Partners/partners.jsx');
var NodersMap = require('../Map/map.jsx');


var SubTitle = React.createClass({
  render : function(){
    return(
      <div className="container-wrapper dark">
        <div className="container ">
          <div className="description">
              <div className="col-xs-12 col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 text-center animated fadeIn delay2s">
                <h1> En <b> <a href="/" title="">Noders</a></b> creamos y mantenemos una comunidad global alrededor de NodeJS y su ecosistema en LatinoAmérica y el Mundo </h1>
                <h2> Cursos, talleres, workshops, hackatones y presentaciones </h2>
                <h2 className="invitation"> ¿Quieres hacer algo en tu Pais? <b>¡Contáctanos! </b></h2>
                <h2 className="invitation">
                  <a href="http://www.twitter.com/noderscl" target="_blank"><i className="fa fa-fw fa-twitter"></i></a>
                  <a href="http://www.facebook.com/noders" target="_blank"><i className="fa fa-fw fa-facebook"></i></a>
                  <a href="https://fforres.typeform.com/to/z2Rj7z" target="_blank"><i className="fa fa-fw fa-slack"></i></a>
                  <a href="https://itunes.apple.com/cl/podcast/id1009061967" target="_blank"><i className="fa fa-fw fa-apple"></i></a>
                  <a href="http://www.stitcher.com/podcast/noderscast/" target="_blank"><i className="fa fa-fw fa-microphone"></i></a>
                  <a href="mailto:slack@noders.com" target="_blank"><i className="fa fa-fw fa-envelope"></i></a>
                  <a href="https://www.youtube.com/playlist?list=PLBEwfn9JYDc-8LKrnlcogwrILF08EqLHF" target="_blank"><i className="fa fa-fw fa-youtube"></i></a>
                </h2>
              </div>
          </div>
        </div>
      </div>
    )
  }
})
var Title = React.createClass({
  render: function() {
    return (
       <div className="container-wrapper light">
          <div className="container ">
              <div className="logo">
                  <div className="text-center ">
                      <div className="col-xs-12 col-lg-8 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 animated fadeIn delay1s">
                          <img src="/assets/img/noders3-white-904.png" alt="" className="img-responsive"/>
                      </div>
                      <div className="col-xs-12 text-center animated fadeIn delay1s">
                          <h1>¿Por qué? Porque nos gusta</h1>
                      </div>
                  </div>
              </div>
          </div>
     </div>
    );
  }
});

module.exports =  
React.createClass({
  render: function() {
        return (
          <div>
            <Title/>
            <SubTitle/>
            <NodersMap/>
            <Partners/>
            <Noders/>
          </div>
        );
  }
});