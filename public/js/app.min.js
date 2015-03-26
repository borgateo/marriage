
!(function( window ){
  'use strict';

  var isChrome = !!window.chrome; 

  var vid =  [
    '<video id="video" poster="/images/header-noi.png" loop="true" preload="none" poster="img/poster.jpg">',
    '<source src="https://dl.dropboxusercontent.com/u/1089758/TnM.webm" type="video/webm">'
  ].join('');

  if( isChrome ) {
    $('#video').replaceWith( $( vid ) );
  }

  $('#video')[0].play();

})( window );





