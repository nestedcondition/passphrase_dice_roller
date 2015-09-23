'use strict';

var rollFive = function() {
  var ans = '';
  for ( var i = 0; i < 5; i++ ) {
    ans += die();
  }
  return ans * 1;
};


var die = function() {
  return Math.floor ( Math.random() * 6 ) + 1 + '';
};


var newPass = function ( n ) {
  n = parseInt ( Math.abs( n ) ) || 5;
  var passPhrase = [];
  for ( var i = 0; i < n; i++ ) {
    passPhrase.push ( dict [ rollFive() ] || dict [ rollFive() ] );
  }
  passPhrase = passPhrase.join ( ' ' );
  return passPhrase;
};


document.addEventListener('DOMContentLoaded', function() {
  var np = newPass();
  var pLink = document.getElementById( 'password' );
  pLink.value = np;
  var range = document.createRange();
  range.selectNode( pLink );
  window.getSelection().addRange( range );
  document.execCommand( 'copy' );
  window.getSelection().removeAllRanges();
});
