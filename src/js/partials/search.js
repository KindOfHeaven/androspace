jQuery('#searchIcon').click(function() {

	var block = jQuery('#searchBlock'),
		attr = 'data-state',
		state = 'is-opened';

	jQuery(block).attr(attr, state);
})

jQuery('#searchCross').click(function() {
	var block = jQuery('#searchBlock'),
		attr = 'data-state';

	jQuery(block).attr(attr, '');
})

var availableTags = [
	"ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
]

jQuery('#searchInput').autocomplete({
    source: availableTags
});

jQuery('.ui-menu').appendTo('#searchBlock');

