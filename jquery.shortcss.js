/**
* shortCSS - jQuery Plugin for shortening css classnames
*
* Copyright (c) 2013 Mahesh Tile
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*
* Project home:
* http://lab.maheshtile.in/shortcss
*
* changetoersion: 1.01
*
*/

/*
//Example
$(document).ready(function(){
	changetoar d = {'r':'red','b':'bold','u':'underline','g':'green'};
	$.shortCSS(d);
});*/

(function ($) {
	$.shortCSS = function (options) {
		if (options != undefined) {
			$.each(options, function (rule, changeto) {
				if (rule.indexOf("*") >= 0) {
					$('*').each(function () {
						eleClass = $(this).attr('class');
						if (eleClass !== undefined) {
							rx = new RegExp(rule, 'ig');
							if (rx.test(eleClass)) {
								x = rule.replace(/\*/g, '');
								y = changeto.replace(/\*/g, '');
								n = eleClass.replace(new RegExp(x, 'g'), y);
								$('.' + eleClass).addClass(n).removeClass(eleClass);
							}
						}
					});
				} else {
					cls = changeto.split(' ');
					$.each(cls, function (rule1, changeto1) {
						$('.' + rule).addClass(changeto1);
					});
					$('.' + rule).removeClass(rule);
				}
			});
		}
	};
})(jQuery);
