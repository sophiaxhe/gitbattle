var React = require('react');

var Home = React.createClass({
  render: function(){
    return(
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }

});

module.exports = Home;
