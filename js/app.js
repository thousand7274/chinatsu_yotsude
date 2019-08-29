$(function(){
  let swiper = new Swiper ('.swiper-container',{
    loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      960: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

// ページ内リンク

    $('a[href^="#"]').click(function () {
      let anchor = $(this).attr("href"); 
      let position = $(anchor).offset().top-50; 
      // アニメーションの指定
      $('body,html').animate({ scrollTop : position }, 500, 'swing'); 
      return false;
  });
  // topへ
  let appear = false;
  let pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '50px' //右から0pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-100px' //右から-100pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});
