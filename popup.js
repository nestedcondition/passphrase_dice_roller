var rollFive = function () {
  var ans = '';
  var array = new Uint16Array( 40 );
  window.crypto.getRandomValues( array );
  while ( ans.length < 5 ) {
    var roll = Math.floor( Math.random() * array.length ) + 1;
    ans += array[ roll ];
  }
  if ( ans.length > 5 ) {
    ans = ans.slice( 0, 5 );
  }
  return Number( ans );
};

var newPass = function ( n ) {
  n = parseInt ( Math.abs ( n ) ) || 5;
  var passPhrase = [];
  for ( var i = 0; i < n; i++ ) {
    var temp = undefined;
    while ( temp === undefined ) {
      temp = dict [ rollFive() ];
    }
    passPhrase.push ( temp );
  }
  passPhrase = passPhrase.join ( ' ' );
  console.log ( passPhrase.length );
  return passPhrase;
};


document.addEventListener('DOMContentLoaded', function() {
  var np = newPass();
  var pLink = document.getElementById( 'password' );
  pLink.value = np;
  var range = document.createRange();
  range.selectNode( pLink );
  window.getSelection().addRange( range );
  console.log( document.execCommand( 'copy' ) );

  window.getSelection().removeAllRanges();
});
