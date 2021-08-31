window.onload = function(){
    $(window).scroll(function(){  
        var scY = $(window).scrollTop();

        if(scY >= 82) {
            $('.header').addClass('header--scrolled');
        }
		else {
            $('.header').removeClass('header--scrolled');
        }

    });
  
  	var sw_visual = new Swiper('.sw-visual', {
    	loop: true,
    	effect: 'fade',
    	crossEffect: {
      		crossFade: true,
    	},
    	autoplay: {
     	delay: 3000,
     	disableOnInteraction: false,
    	},
    	speed: 1200,
		pagination: {
			el: '.sw-visual__pg',
			clickable: true,
		},
  	})
};