var React = require('react');
require('./footer.css');
module.exports = React.createClass({
  render : function(){
    return  (

      <footer className="footer">
          <div className="container-wrapper">
              <div className="container">
                  <p>
                      Made with <i className="fa fa-fw fa-heart heart"></i> by your beloved nerds @ <a target="_blank" href="http://www.noders.com" title="">Noders.com</a>
                  </p>
                  <p className="github">
                      <a href="https://github.com/Noders/Noders-Web" title="Noders Github"> Forkeanos en Github <i className="fa fa-fw fa-github"></i></a>
                  </p>
                  <hr/>
                  <p className="helpers">
                      Hicieron este sitio posible:
                  </p>
                  <p className="helpers">
                      <a target="_blank" href="https://twitter.com/fforres">@fforres</a>
                      |
                      <a target="_blank" href="https://twitter.com/WillBonilla11">@WillBonilla11</a>
                      |
                      <a target="_blank" href="https://twitter.com/guscanales">@guscanales</a>
                      |
                      <a target="_blank" href="https://twitter.com/mala_leche">@mala_leche</a>
                      |
                      <a target="_blank" href="https://twitter.com/r_chancay">@r_chancay</a>
                  </p>
              </div>
          </div>
      </footer>
    )
  }
})