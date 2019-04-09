jQuery('.js-filter').click(function() {
	var block = jQuery(this).parent().children('.js-filter__submenu');
	if (jQuery(block).attr('data-state') === 'is-opened') {
		jQuery(block).attr('data-state', '')
	} else {
		jQuery(block).attr('data-state', 'is-opened');
	}
})