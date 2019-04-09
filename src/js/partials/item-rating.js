jQuery('.item__tags--tag.-plus').click(function() {
	jQuery(this).parent().find('.item__tags--tag').css('display', 'flex')
	jQuery(this).hide()
})

jQuery('.item__hover').hide();
jQuery('.js-item__rating').click(function() {
	var block = jQuery(this).parent();
	if (jQuery(block).children('.item__hover').is(':visible')) {
		jQuery(block).children('.item__hover').slideUp(300);
		setTimeout(function() {
			jQuery(block).children('.item__content').slideDown(300);
			jQuery(block).attr('data-state', function(index, attr) {
				return attr == 'is-opened' ? null : 'is-opened'
			})
		}, 400)
	} else {
		jQuery(block).children('.item__content').slideUp(300);
		setTimeout(function() {
			jQuery(block).children('.item__hover').slideDown(300);
			jQuery(block).attr('data-state', function(index, attr) {
				return attr == 'is-opened' ? null : 'is-opened'
			})
		}, 400)
	}
})