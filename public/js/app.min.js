
!(function( window ){
  'use strict';

  var isChrome = !!window.chrome; 

  if( isChrome ) {
    alert('chrome!')
  }

  $('#video')[0].play();

})( window );





