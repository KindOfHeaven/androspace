jQuery('.game-download__block--title').click(function() {
	var block = jQuery(this).parent()
	jQuery(block).attr('data-state', function(index, attr) {
		return attr == "is-opened" ? null : 'is-opened';
	})
})


jQuery('.js-anchor').click(function(e) {
	e.preventDefault();
	var anchor = jQuery(this).attr('href');
	var top = jQuery(anchor).offset().top;
	jQuery('body, html').animate({scrollTop: top}, 1500);
})

jQuery('.picture__rating--star').hover(function() {
	var block = jQuery(this).parent(),
		i = jQuery(this).index();
	jQuery(block).find('.picture__rating--star').each(function() {
		if (jQuery(this).index() <= i) {
			jQuery(this).attr('data-hover', 'is-active');
		} else {
			jQuery(this).attr('data-hover', 'is-not-active');
		}
	})
}, function() {
	var block = jQuery(this).parent(),
		i = jQuery(this).index();
	jQuery(block).find('.picture__rating--star').attr('data-hover', '');
})

jQuery('.picture__rating--star').click(function() {
	var block = jQuery(this).parent(),
		i = jQuery(this).index();
	jQuery(block).find('.picture__rating--star').each(function() {
		if (jQuery(this).index() <= i) {
			jQuery(this).attr('data-state', 'is-active');
		} else {
			jQuery(this).attr('data-state', '');
		}
	})
})