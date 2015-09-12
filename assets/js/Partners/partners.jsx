var React = require('react');
var partnersArr = require('../api/partners');

var Partner = React.createClass({
  render: function(){
    return (
      <div className="col-sm-2 col-xs-4 col-md-3 col-lg-2 partner" ng-repeat="partner in partners">
          <a className="img-wrap" href={this.props.url} target="_blank">
              <img src={this.props.img} className="img" alt=""/>
              <h3 className="text">{this.props.name}</h3>
          </a>
      </div>
    )
  }
})
var Partners = React.createClass({
  render: function(){
    var partners = partnersArr.map(function(p){
      return (
        <Partner 
          url={p.url}
          img={p.img}
          name={p.name}
          />
      )
    });
    return(
      <div className="container-wrapper dark">
          <div className="container  animated fadeInLeft" ng-show="partners">
              <div className="partners">
                  <div className="col-lg-12">
                      <h1 className="page-header"> Nuestros partners <i className="fa fa-fw fa-heart icon heart"></i></h1>
                      {partners}
                      <div className="col-xs-12 partner missing">
                        <div className="col-xs-12 partner missing">
                            <a className="col-sm-6 col-sm-offset-3" href="mailto:partners@noders.cl" target="_blank">
                                <h1 className="text">¿Quieres ser nuestro partner?</h1>
                                <h5 className="subtext"><u>¡Comunícate con nosotros!</u> <i className="fa fa-fw fa-envelope"></i></h5>
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

module.exports = Partners;