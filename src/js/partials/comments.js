jQuery('.js-smiles').click(function() {
	var block = jQuery(this).parent();
	jQuery(block).attr('data-state', function(index, attr) {
		return attr == 'is-opened' ? null : 'is-opened';
	})
})
jQuery('.game-comments__form--rating-button').click(function() {
	var block = jQuery('.game-comments__form--rating');

	if (jQuery(block).attr('data-state') === 'is-opened') {
		jQuery(this).attr('data-state', '').find('.game-comments__form--rating-text > span').text('Оценить игру')
		jQuery(block).attr('data-state', '')
	} else {
		jQuery(this).attr('data-state', 'is-opened').find('.game-comments__form--rating-text > span').text('Свернуть')
		jQuery(block).attr('data-state', 'is-opened')
	}
})

jQuery('.game-comments--title').click(function() {
	if (jQuery(this).attr('data-state') === 'is-opened') {
		return 0;
	}
	attr = jQuery(this).attr('data-content');
	jQuery('.game-comments--title[data-state="is-opened"]').attr('data-state', '')
	jQuery(this).attr('data-state', 'is-opened');
	jQuery('.game-comments--block[data-state="is-opened"]').attr('data-state', '')
	jQuery('.game-comments--block[data-content="' + attr + '"]').attr('data-state', 'is-opened')
})