var header = jQuery('.header:eq(0)'),
	scrollPrevious = 0;

jQuery(window).on('scroll', function() {
	var scrolled = jQuery(window).scrollTop();
	if (scrolled > 0) {
		jQuery(header).addClass('-scrolling');
		if (scrollPrevious <= scrolled) {
			jQuery(header).removeClass('-scrolling__show');
		} else {
			jQuery(header).addClass('-scrolling__show');
		}
		scrollPrevious = scrolled;
	} else {
		jQuery(header).removeClass('-scrolling').removeClass('-scrolling__show');
	}
})