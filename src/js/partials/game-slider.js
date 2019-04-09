jQuery('.game-descr--slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: '.game-descr--slider-nav'
});
jQuery('.game-descr--slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  centerPadding: '30px',
  asNavFor: '.game-descr--slider-for',
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1220,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '0',
        asNavFor: '.game-descr--slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '0',
        asNavFor: '.game-descr--slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
        asNavFor: '.game-descr--slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
        asNavFor: '.game-descr--slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true
      }
    }
  ]	
});
if (jQuery('.game-descr--slider-nav .slick-arrow').length) {
    jQuery('.game-descr--slider-nav .slick-arrow').html('<svg class="icon icons--icon-21"><use xlink:href="./img/sprite.svg#icons--icon21"></use></svg>')
  }
jQuery(window).resize(function() {
  if  (jQuery(window).outerWidth() < 1220) {
     jQuery('.game-descr--slider-nav .slick-arrow').remove()
  } else {
    jQuery('.game-descr--slider-nav .slick-arrow').html('<svg class="icon icons--icon-21"><use xlink:href="./img/sprite.svg#icons--icon21"></use></svg>')
  }
})