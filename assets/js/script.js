(function($,sr){

  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');







(function(){

	$wrapper = $('#wrapper');
	$drawerRight = $('#drawer-right');
	$logo = $('.logo');



	///////////////////////////////
	// SlideNav
	///////////////////////////////



	function setSlideNav(){
		jQuery(".toggleDrawer").click(function(e){
			e.preventDefault();

			if($wrapper.css('marginLeft')=='0px'){
				$drawerRight.animate({marginRight : 0},500);
				$wrapper.animate({marginLeft : -300},500);
				$logo.animate({marginLeft : 300},150);
			}
			else{
				$drawerRight.animate({marginRight : -300},500);
				$wrapper.animate({marginLeft : 0},500);
				$logo.animate({marginLeft : 0},200);
			}
			
		})
	}



	function setHeaderBackground() {		
		var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top	
		
		if (scrollTop > 300 || jQuery(window).width() < 700) { 
			jQuery('#header .top').addClass('solid');
		} else {
			jQuery('#header .top').removeClass('solid');		
		}
	}




	///////////////////////////////
	// Initialize
	///////////////////////////////


	
	setSlideNav();
	setHeaderBackground();



	jQuery(window).scroll( function() {
	   setHeaderBackground();
	});

})();