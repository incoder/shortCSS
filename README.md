ShortCSS - jQuery Plugin
========================

[shortCSS](http://lab.maheshtile.in/shortcss) - jQuery Plugin for shorten/replace css classnames


## Getting Started

Include jQuery and the plugin on a page. Then add rules object and call shortCSS().
check the examples


```js
$(document).ready(function(){
	var rules = {
	'hero-unit':'jumbotron',                //change hero-unit to jumbotron
	'span*':'col-md-*',                     // change all span{anything} classes to col-md-{anything}
	'icon-*':'glyphicon glyphicon-*',       // add multiple classes for one
	'bt-lg':'btn btn-primary btn-large',    //shorten the classes group
	//'span4':'col-lg-4',
	};
	$.shortCSS(rules);
});
```


## License
Copyright (c) 2013 Mahesh Tile 
Licensed under the MIT license.
