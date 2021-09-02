window.onload = function(){
	var bullets = $('.sw-visual__pg .swiper-pagination-bullet');

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
		on: {
			slideChange: function() {
				changePg(this.realIndex);
			}
		},
	})
	
	
	var bulletsIndex = 0;

	function changePg(_num) {
		if (_num == bulletsIndex) {
			return;
		}
        $('.sw-visual__pg .swiper-pagination-bullet').removeClass('sw-visual__pg--active');
        $('.sw-visual__pg .swiper-pagination-bullet').eq(bulletsIndex).addClass('sw-visual__pg--active');
        bulletsIndex = _num;
    }


    $.each(bullets, function(index, item) {
		$(this).click(function() {
			changePg(index);
		});
	});
};