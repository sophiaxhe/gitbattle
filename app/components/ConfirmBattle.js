var React = require('react');

function ConfirmBattle(props) {
  return props.loading === true
  ? <p> LOADING! </p>
  : <p> CONFIRM BATTLE! </p>

}

module.exports = ConfirmBattle;
