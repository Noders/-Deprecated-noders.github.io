var React = require('react');
var nodersArr = require('../api/noders');

var Noder = React.createClass({
  render: function(){
    return(
      <div className="noder col-sm-2 col-xs-4 col-md-2 col-lg-2" ng-repeat="noder in noders">
          <a className="img-wrap" href={this.props.url} target="_blank">
              <img src={this.props.img} className="img" alt=""/>
              <h3 className="text username">{this.props.username}</h3>
              <p className="text country">{this.props.pais}</p>
          </a>
      </div>
    )
  }
});

var Noders = React.createClass({
  render: function(){
    var noders = nodersArr.map(function(n){
      return (
        <Noder 
          url={n.url}
          img={n.img}
          username={n.username}
          pais={n.pais}
          description={n.description}
          />
      )
    });
    return(
      <div className="container-wrapper light">
          <div className="container animated fadeInLeft " ng-show="partners">
              <div className="noders">
                  <div className="col-lg-12">
                      <h1 className="page-header"> We are Noders <i className="fa fa-fw fa-globe icon globe"></i></h1>
                      {noders}
                      <div className="col-xs-12 noder missing">
                      <div className="col-xs-12 noder missing">
                          <a className="col-sm-6 col-sm-offset-3" href="mailto:partners@noders.cl" target="_blank">
                              <h1 className="text">¿Nos faltas tú? ¿Olvidamos a alguien?</h1>
                              <h5 className="subtext"> <u>Envíanos un mensaje </u> <i className="fa fa-fw fa-envelope"></i></h5>
                          </a>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
})

module.exports = Noders;
