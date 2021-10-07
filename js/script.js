window.onload = function () {
  // AOS 초기화
  AOS.init({
    duration: 600,
    once: true,
  });

  // 모달창 닫기
  const modal = $('.modal');
  const modalBox = $('.modal-box');
  const modalClose = $('.modal__close');

  modalClose.click(function () {
    modal.stop().fadeOut();
  });

  modal.click(function () {
    $(this).stop().fadeOut();
  });

  modalBox.click(function (event) {
    event.stopPropagation();
  });

  // header 고정
  const header = $('.header');
  const headerScr = 'header--scroll';

  $(window).scroll(function () {
    let winScrTop = $(window).scrollTop();

    if (winScrTop >= 82) {
      header.addClass(headerScr);
    } else {
      header.removeClass(headerScr);
    }
  });

  // 페이지네이션
  let bulletsIndex = 0;
  const swVisualPg = $('.sw-visual__pg .swiper-pagination-bullet');
  const swVisualPgActive = $('sw-visual__pg--active');

  function changePg(num) {
    if (num == bulletsIndex) {
      return;
    }
    swVisualPg.removeClass(swVisualPgActive);
    swVisualPg.eq(bulletsIndex).addClass(swVisualPgActive);
    bulletsIndex = num;
  }

  // Visual 슬라이드
  new Swiper('.sw-visual', {
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
      slideChange: function () {
        changePg(this.realIndex);
      }
    },
  });

  // 모바일 gnb 보이기/숨기기
  const mbMenu = $('.mb-menu');
  const mbGnb = $('.mb-gnb');
  const mbGnbOpen = 'mb-gnb--open';
  const mbGnbClose = $('.mb-gnb__close');

  mbMenu.click(function () {
    mbGnb.toggleClass(mbGnbOpen);
  });

  mbGnbClose.click(function () {
    mbGnb.removeClass(mbGnbOpen);
  });

  // 윈도우 크기 조절 시 모바일 gnb 숨기기
  $(window).resize(function () {
    let winW = $(window).width();
    if (winW > 1024) {
      mbGnb.removeClass(mbGnbOpen);
    }
  });
};