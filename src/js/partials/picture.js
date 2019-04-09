jQuery('.settings__block--close').click(function() {
	jQuery(this).attr('data-state', function(index, attr) {
		return attr == 'is-closed' ? null : 'is-closed';
	})
})

jQuery('.tabs__tab').click(function(){
	jQuery('.tabs__tab').attr('data-state', '')
	jQuery(this).attr('data-state', 'is-active')
})