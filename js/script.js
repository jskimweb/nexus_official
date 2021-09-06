window.onload = function(){
  AOS.init();

	var bullets = $('.sw-visual__pg .swiper-pagination-bullet');

  $(window).scroll(function(){  
    var scY = $(window).scrollTop();

    if(scY >= 82) {
      $('.header').addClass('header--scroll');
    }
    else {
      $('.header').removeClass('header--scroll');
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

  var mb_menu = $('.mb-menu');
  var mb_gnb = $('.mb-gnb');
  mb_menu.click(function() {
    mb_gnb.toggleClass('mb-gnb--open');
  });

  var mb_gnb__close = $('.mb-gnb__close');
  mb_gnb__close.click(function() {
    mb_gnb.removeClass('mb-gnb--open');
  });

  $(window).resize(function() {
    var winW = $(window).width();
    if (winW > 1024) {
      mb_gnb.removeClass('mb-gnb--open');
    }
  })
};