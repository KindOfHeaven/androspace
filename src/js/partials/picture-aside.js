if (jQuery(window).outerWidth() > 768) {
	jQuery('.filter__part').attr('data-state', '')
} else {
	jQuery('.js-aside__title').click(function() {
		if (jQuery(window).outerWidth() > 768) {
			return 0;
		}
		var block = jQuery(this).parent();
		jQuery(block).attr('data-state', function(index, attr) {
			return attr == 'is-opened' ? null : 'is-opened'
		})
	})
}