'use strict';

var rollFive = function() {
  var ans = '';
  for ( var i = 0; i < 5; i++ ) {
    ans += die();
  }
  return ans;
};


var die = function() {
  return Math.floor ( Math.random() * 6 ) + 1 + '';
};


var newPass = function ( n ) {
  n = parseInt ( Math.abs( n ) ) || 5;
  var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var randomChar;
  var randomSpecialChar = Math.floor( Math.random() * specialCharacters.length );
  var passPhrase = [];

  for ( var i = 0; i < n; i++ ) {
    passPhrase.push ( dict [ rollFive() ] || dict [ rollFive() ] );
  }

  passPhrase = passPhrase.join ( ' ' );
  // insert a random digit or puctuation symbol
  randomChar = Math.floor( Math.random() * passPhrase.length );
  passPhrase = passPhrase.slice( 0, randomChar ) + specialCharacters[ randomSpecialChar ] + passPhrase.slice( randomChar + 1 );

  return passPhrase;
};


document.addEventListener('DOMContentLoaded', function() {
  var np = newPass( 6 ); // now with six word pass phrases
  var pLink = document.getElementById( 'password' );
  pLink.value = np;
  var range = document.createRange();
  range.selectNode( pLink );
  window.getSelection().addRange( range );
  document.execCommand( 'copy' );
  window.getSelection().removeAllRanges();
});
