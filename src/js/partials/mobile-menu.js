jQuery('#hamburger').click(function() {

	var block = jQuery('#menu'),
		attr = 'data-state',
		state = 'is-opened';

	if (jQuery(this).attr(attr) === state) {
		jQuery('body').removeClass('-blacked');
		jQuery(block).attr(attr, '');
		jQuery(this).attr(attr, '');
	} else {
		jQuery(block).attr(attr, state);
		jQuery(this).attr(attr, state);
		jQuery('body').addClass('-blacked');
	}

})


jQuery('.js-menu__item[data-submenu="has-submenu"]').click(function() {

	var attr = 'data-state',
		state = 'is-opened';

	if (jQuery(this).attr(attr) === state) {
		jQuery(this).attr(attr, '');
	} else {
		jQuery(this).attr(attr, state);
	}

})

jQuery(window).resize(function() {
	if (jQuery(window).outerWidth > 1220) {
		jQuery('.opacity')
	}
})