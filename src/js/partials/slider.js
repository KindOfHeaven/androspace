
function slider() {
  if (jQuery(window).outerWidth() < 768) {
    jQuery('.js-slider:not(.-large)').each(function() {
      if (jQuery(this).children('a:not(.button--all)').length) {
        jQuery(this).children('a:not(.button--all)').wrapAll('<div class="js-slider__init"></div>');
      }
    })
    if (jQuery('.js-slider__init:not(.slick-initialized)').length) {
      jQuery('.js-slider__init').slick({
        responsive: [
          {
            breakpoint: 3000,
            settings: "unslick"
          },
          {
            breakpoint: 768,
            settings: {
              dots: true,
              infinite: false,
              speed: 300,
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              dots: true,
              infinite: false,
              speed: 300,
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    }
    if (jQuery('.js-slider.-large:not(.slick-initialized)').length) {
    jQuery('.js-slider.-large').slick({
  responsive: [
    {
      breakpoint: 3000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  }
  if (jQuery('#topSlider:not(.slick-initialized)').length) {
jQuery('#topSlider').slick({
    responsive: [
      {
        breakpoint: 3000,
        settings: "unslick"
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
})
}
  } else {
    if (jQuery('.js-slider__init').length) {
      jQuery('.js-slider__init').slick('unslick')
      jQuery('.js-slider__init > a').unwrap()
    }
  }
}

slider();
jQuery(window).resize(function() {
  slider();
});
