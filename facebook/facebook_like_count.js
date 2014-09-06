// integrate. simple social networking integration for your site.
// facebook like count for pages.
// licensed under Creative Commons Attribution-ShareAlike 4.0 International
// free for personal and commercial use.
// official site: http://integrate.cf
// source code: http://github.com/my5t/integrate

// teh codez.
window.onload=function(){
(function() {
    var Lib = {
        ajax: {
            xhr: function() {
                var instance = new XMLHttpRequest();
                return instance;
            },
            getJSON: function(options, callback) {
                var xhttp = this.xhr();
                options.url = options.url || location.href;
                options.data = options.data || null;
                callback = callback ||
                function() {};
                options.type = options.type || 'json';
                var url = options.url;
                if (options.type == 'jsonp') {
                    window.jsonCallback = callback;
                    var $url = url.replace('callback=?', 'callback=jsonCallback');
                    var script = document.createElement('script');
                    script.src = $url;
                    document.body.appendChild(script);
                }
                xhttp.open('GET', options.url, true);
                xhttp.send(options.data);
                xhttp.onreadystatechange = function() {
                    if (xhttp.status == 200 && xhttp.readyState == 4) {
                        callback(xhttp.responseText);
                    }
                };
            }
        }
    };

    window.Lib = Lib;
})()


    Lib.ajax.getJSON({
        url: 'https://graph.facebook.com/' + intfacebookpage + '?callback=jsonCallback',
        type: 'jsonp'
    }, function(jsondata) {
		if (typeof jsondata["likes"] === 'undefined') {
		}
		else {
			document.querySelector('#' + intfacebooklikeid).textContent=jsondata["likes"];
		}
    });
}
