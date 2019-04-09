jQuery('.js-filter__open').click(function() {
	var block = jQuery('.filter__block');
	jQuery(block).attr('data-state', 'is-opened');
	jQuery('body').addClass('-blacked');
});

jQuery('.js-filter--submit, .opacity').click(function() {
	var block = jQuery('.filter__block');
	jQuery(block).attr('data-state', '');
	jQuery('body').removeClass('-blacked');
})

jQuery('.js-filter__show').click(function() {
	jQuery(this).parent().find('.filter__part--list').attr('data-state', function(index, attr) {
		return attr == 'all' ? null : 'all';
	});
	jQuery(this).parent().find('.js-filter__part--input').attr('data-state', function(index, attr) {
		return attr == 'hidden' ? null : 'hidden';
	});
	jQuery(this).attr('data-state', function(index, attr) {
		return attr == 'close' ? null : 'close';
	});
	if (jQuery(this).attr('data-state') == 'close') {
		jQuery(this).find('span').text('Свернуть')
		jQuery(this).parent().find('.js-filter__part--list').mCustomScrollbar("update");
		sort(jQuery(this).parent().find('.js-filter__part--list'))
	} else {
		jQuery(this).find('span').text('Показать все')
		jQuery(this).parent().find('.js-filter__part--list').mCustomScrollbar("disable", true);
		disableSort(jQuery(this).parent().find('.js-filter__part--list'));
		jQuery(this).parent().find('li').show()
	}
})


function filterInit() {
	var lists = jQuery('.js-filter__part--list');
	jQuery(lists).mCustomScrollbar({
    	axis:"y"
	});
	setTimeout(function() {
		jQuery(lists).mCustomScrollbar('disable', true);
	}, 100)
	jQuery(lists).each(function() {
		jQuery(this).find('li').each(function() {
			jQuery(this).attr('data-index', function(index, attr) {
				return jQuery(this).index() + 1;
			})
		})
	})
	jQuery('.js-filter__part--list .filter__part--item').click(function(event) {
		event.stopPropagation();
		if (event.target.nodeName === 'A') {
			jQuery(this).attr('data-state', function(index, attr){
    			return attr == 'is-chosen' ? null : 'is-chosen';
			});
		}
	})
	disablePictureList();
}
function disablePictureList() {
	if (jQuery(window).outerWidth() < 768) {
		jQuery('.filter__picture--list').mCustomScrollbar('destroy');
	} else {
		jQuery('.filter__part').attr('data-state', '')
		jQuery('.filter__picture--list').mCustomScrollbar({
    		axis:"y"
		});
		setTimeout(function() {
			jQuery('.filter__picture--list').mCustomScrollbar('disable', true);
		}, 100)
	}
}
filterInit()
jQuery(window).resize(function() {
	disablePictureList();
})
function sort(list) {
	var alphabet = [],
		letter = '',
		text = '';
	jQuery(list).find('li').each(function() {
		text = jQuery(this).find('a').text().toUpperCase();
		letter = text[0];
		if (alphabet.indexOf(letter) == -1) {
			alphabet.push(letter);
		}
		return 0;
	})
	alphabet.sort();
	for (var i = 0; i < alphabet.length; i++) {
		jQuery(list).find('.mCSB_container').append('<div class="filter__part--sort" data-sort="' + alphabet[i] + '">');
		jQuery(list).find('li').each(function() {
			text = jQuery(this).find('a').text().toUpperCase();
			letter = text[0];
			if (alphabet[i] === letter) {
				jQuery(this).appendTo(jQuery(list).find('.filter__part--sort[data-sort="' + alphabet[i] + '"]'));
			}
			return 0;
		})
	}
	jQuery('.js-filter__part--list .filter__part--sort').click(function() {return 0}).on('click','li', function(event) {
		event.stopPropagation();
		if (event.target.nodeName === 'A') {
			jQuery(this).attr('data-state', function(index, attr){
    			return attr == 'is-chosen' ? null : 'is-chosen';
			});
		}
	})
}

function disableSort(list) {
	jQuery(list).find('.filter__part--sort > li').unwrap()
   	var sortedList = jQuery(list).find('li').sort(function(lhs, rhs){
      	return parseInt($(lhs).attr("data-index"),10) - parseInt($(rhs).attr("data-index"),10);
   	});
	jQuery(list).find('.mCSB_container').html(sortedList);
	jQuery('.js-filter__part--list .filter__part--item').click(function(event) {
		event.stopPropagation();
		if (event.target.nodeName === 'A') {
			jQuery(this).attr('data-state', function(index, attr){
    			return attr == 'is-chosen' ? null : 'is-chosen';
			});
		}
	})
}

jQuery('.js-filter__show').each(function() {
	var list = jQuery(this).parent().find('.js-filter__part--list'),
		tags = [];
	jQuery(list).find('.filter__part--link').each(function() {
		tags.push(jQuery(this).text());
	})
	jQuery(list).parent().find('.js-filter__part--input').autocomplete({
	    source: tags,
	    select: function(event, ui) {
	    	var text = ui.item.value;
	    	jQuery(list).find('.filter__part--link').each(function() {
	    		if (jQuery(this).text() !== text) {
	    			jQuery(this).parent().hide()
	    		}
	    	})
	    	jQuery(list).find('.filter__part--sort').each(function() {
	    		if (jQuery(this).find('li:visible').length) {
	    			jQuery(this).show()
	    		} else {
	    			jQuery(this).hide()
	    		}
	    	})
	    },
	    open: function(event, ui) { 
	    	var _tags = []
	    	jQuery('#ui-id-2').hide()
	    	jQuery('#ui-id-2 > li').each(function() {
	    		_tags.push(jQuery(this).find('div').text());
	    	})
	    	jQuery(list).find('.filter__part--link').each(function() {
	    		if (_tags.indexOf(jQuery(this).text()) != -1) {
	    			jQuery(this).parent().show()
	    		} else {
	    			jQuery(this).parent().hide()
	    		}
	    	})
	    	jQuery(list).find('.filter__part--sort').each(function() {
	    		if (jQuery(this).find('li:visible').length) {
	    			jQuery(this).show()
	    		} else {
	    			jQuery(this).hide()
	    		}
	    	})
	    }
	});
	jQuery(list).parent().find('.js-filter__part--input').on('input', function() {
		if (jQuery(this).val() === '') {
			jQuery(list).find('.filter__part--item').show()
			jQuery(list).find('.filter__part--sort').show()
		}
	})
})


