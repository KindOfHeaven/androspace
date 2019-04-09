jQuery('.js-open--tags').click(function() {
	jQuery('.tags--block').toggleClass('-opened')
	jQuery('.js-tags--input').val('');
	jQuery('.tags--tag').show()
})

jQuery('.js-tags--search__icon').click(function() {
	jQuery('.js-tags--search').attr('data-state', 'is-opened');
})

jQuery('#tagsSearchCross').click(function() {
	jQuery('.js-tags--search').attr('data-state', ' ');
})

var tags = [];
jQuery('.tags--link').each(function() {
	tags.push(jQuery(this).text());
})

jQuery('.js-tags--input').autocomplete({
    source: tags,
    select: function(event, ui) {
    	var text = ui.item.value;
    	jQuery('.tags--link').each(function() {
    		if (jQuery(this).text() !== text) {
    			jQuery(this).parent().hide()
    		}
    	})
    },
    open: function(event, ui) { 
        jQuery('#ui-id-2').hide()
    	var _tags = []
    	jQuery('#ui-id-2 > li').each(function() {
    		_tags.push(jQuery(this).find('div').text());
    	})
    	jQuery('.tags--link').each(function() {
    		if (_tags.indexOf(jQuery(this).text()) != -1) {
    			jQuery(this).parent().show()
    		} else {
    			jQuery(this).parent().hide()
    		}
    	})
    }
});

jQuery('.js-tags--input').on('input', function() {
	if (jQuery(this).val() === '') {
		jQuery('.tags--tag').show()
	}
})