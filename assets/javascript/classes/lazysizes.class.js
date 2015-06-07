/**
 * Lazysizes
 *
 * Lazy loader class for (responsive) images
 * https://github.com/aFarkas/lazysizes
 */

var lazysizes = {

	/**
	 * Init lazysizes
	 */
	init: function() {
		document.addEventListener('lazyriasmodifyoptions', function(e) {
			// If pixel ratio > 1.4 set (resrc) jpg quality to a lower percentage
			e.detail.quality = (window.devicePixelRatio || 1) > 1.4 ? 65 : 60;
		});
		document.addEventListener('lazybeforeunveil', function(e){
			// Replace default `data-src/bgset` placeholder width and quality
			// values, with the by lazyizes calculated {width} and {quality} values
			var srcAttr = 'data-src';
			var src = e.target.getAttribute(srcAttr);
			if(!src) {
				srcAttr = 'data-bgset';
				src = e.target.getAttribute(srcAttr);
				if(!src) { return; }
			}
			e.target.setAttribute(srcAttr, src.replace(/s=w(\d+)/, 's=w{width}').replace(/o=(\d+)/, 'o={quality}'));

			// // Basic support for background images (for without bgset plugin)
			// var bg = e.target.getAttribute('data-bg');
			// if(bg) {
			// 	e.target.style.backgroundImage = 'url(' + bg + ')';
			// 	e.target.removeAttribute('data-bg');
			// }
		});
	},
};
