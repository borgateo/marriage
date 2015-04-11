!(function(window) {

  var support    = { animations : Modernizr.cssanimations };
  var container  = document.getElementById( 'container-loader' );
  var header     = container.querySelector( '.ip-header' );

  var video      = document.getElementById('video');
  var videoReady = false;

  video.oncanplay = function() {
    videoReady = true;
  };

  var loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
    animEndEventNames = { 
      'WebkitAnimation' : 'webkitAnimationEnd', 
      'OAnimation' : 'oAnimationEnd', 
      'msAnimation' : 'MSAnimationEnd', 
      'animation' : 'animationend' 
    },
    // animation end event name
    animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];


  function init() {

    var onEndInitialAnimation = function() {
      if ( support.animations ) {
        this.removeEventListener( animEndEventName, onEndInitialAnimation );
      }

      startLoading();
    };

    // disable scrolling
    window.addEventListener( 'scroll', noscroll );

    // initial animation
    classie.add( container, 'loading' );

    if( support.animations ) {
      container.addEventListener( animEndEventName, onEndInitialAnimation );
    }
    else {
      onEndInitialAnimation();
    }
  }

  function startLoading() {
    var simulationFn = function( instance ) {
      var progress = 0,
        interval = setInterval( function() {
          progress = Math.min( progress + Math.random() * 0.1, 1 );

          if ( videoReady ) {
            progress = 1;
          }
          else {
            progess -= 0.1;
          }

          instance.setProgress( progress );

          // reached the end
          if( progress === 1 ) {
            classie.remove( container, 'loading' );
            classie.add( container, 'loaded' );
            clearInterval( interval );

            var onEndHeaderAnimation = function(ev) {
              if ( support.animations ) {
                if ( ev.target !== header ) {
                  return;
                }
                this.removeEventListener( animEndEventName, onEndHeaderAnimation );
              }

              classie.add( document.body, 'layout-switch' );
              window.removeEventListener( 'scroll', noscroll );
            };

            if( support.animations ) {
              header.addEventListener( animEndEventName, onEndHeaderAnimation );
            }
            else {
              onEndHeaderAnimation();
            }
          }
        }, 100 );
    };

    loader.setProgressFn( simulationFn );
  }
  
  function noscroll() {
    window.scrollTo( 0, 0 );
  }

  init();

})(window);