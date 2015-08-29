
reactor.filter('formatDate', function(){
    return function( date ) {
    	stringDate = new Date( date );
        return stringDate.toDateString();
    };
});


reactor.filter('trusted', function ($sce, $sanitize) {
    return function (text) {
        var regex = /href="([\S]+)"/g;
        var newString = $sanitize(text).replace(regex, "onClick=\"window.open('$1', '_blank', 'location=no,enableViewportScale=yes')\"");
        return $sce.trustAsHtml(newString);
    }
});

reactor.filter('allow_html', function ($sce) {
    return function (text) {

		var htmlObject = document.createElement('div');
		htmlObject.innerHTML = text;

		var navItem = htmlObject.getElementsByTagName('a');
		var iframeItem = htmlObject.getElementsByTagName('iframe');

		for (var i = 0; i < navItem.length; i++) {

		    var page = navItem[i].getAttribute('applink');
		    var link = navItem[i].getAttribute('href');

		    if(page) {
			    var pagelink = get_page_route( page );
			    navItem[i].href = pagelink;
		    } else {
			    navItem[i].removeAttribute('href');
			    navItem[i].setAttribute('onclick', 'window.open("'+ link +'", "_blank", "location=no,enableViewportScale=yes")');
		    }

		}

		for (var i = 0; i < iframeItem.length; i++) {

		    var src = iframeItem[i].getAttribute('src');

		    if( src.substr(0, 6) == "https:" ||  src.substr(0, 5) == "http:" ) {

			} else {
				var prefix = 'http:';

				if ( src.substr(0, prefix.length) !== prefix ) {
				    src = prefix + src;
				    iframeItem[i].setAttribute('src', src);
				}
			}

		}

        return $sce.trustAsHtml(htmlObject.outerHTML);
    }
});


reactor.filter('trust', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
});

reactor.filter('striptags', function($sce, $sanitize){
    return function(text) {
    	var StrippedString = $sanitize(text).replace(/<\/?[^>]+(>|$)/g, "");
        return $sce.trustAsHtml(StrippedString);
    };
});


reactor.filter('hasFeatured', function() {

   return function( items ) {

    var filtered = [];

    angular.forEach(items, function(item) {
       if( condition === item.featured_image.attachment_meta.sizes.medium.url ||  item.condition === '' ){
         filtered.push(item);
       }
    });

    return filtered;
  };
});


reactor.filter('i18n', function($sce){
		function filterFn(text) {
			var rText = ( typeof REACTOR_TEXT !== 'undefined' ) ? REACTOR_TEXT[text] : '';
			return $sce.trustAsHtml(rText);
		    
		}
	
	    filterFn.$stateful = true;
	
	    return filterFn;
});

reactor.filter('spinnerFilter', function() {

	var spinner = ( AppConfig['meta']['design']['spinner'] ) ? AppConfig['meta']['design']['spinner'] : '';

	return function() {
        return spinner;
    };	
});