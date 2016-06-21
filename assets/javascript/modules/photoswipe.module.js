/**
 * Photoswipe module
 */

var Photoswipegallery = (function () {

	var initPhotoSwipeFromDOM = function(galleryLinkSelector) {

		// parse slide data (url, title, size ...) from DOM elements
		// (children of galleryLinkSelector)
		var parseThumbnailElements = function(el) {
			var thumbElements = el.querySelectorAll('.pswp-img'),
			numNodes = thumbElements.length,
			items = [],
			figureEl,
			linkEl,
			size,
			item;

			for(var i = 0; i < numNodes; i++) {

				figureEl = thumbElements[i]; // <figure> element

				// include only element nodes
				if(figureEl.nodeType !== 1) {
					continue;
				}

				linkEl = thumbElements[i]; // <a> element

				size = linkEl.getAttribute('data-pswp-size').split('x');

				// create slide object
				item = {
					src: linkEl.getAttribute('data-pswp-href'),
					w: parseInt(size[0], 10),
					h: parseInt(size[1], 10)
				};

				var caption = linkEl.getAttribute('data-pswp-caption');

				// Change this to correct caption attr
				if(typeof caption === 'string' && caption.length > 1) {
					item.title = linkEl.getAttribute('data-pswp-caption');
				}

				// Change this to correct src attr
				if(linkEl.children.length > 0) {
					// <img> thumbnail element, retrieving thumbnail url
					item.msrc = linkEl.children[0].getAttribute('data-src');
				}
				item.msrc = linkEl.getAttribute('data-src');

				item.el = figureEl; // save link to element for getThumbBoundsFn
				items.push(item);
			}

			return items;
		};

		// find nearest parent element
		var closest = function closest(el, fn) {
			return el && ( fn(el) ? el : closest(el.parentNode, fn) );
		};

		var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
			var pswpElement = document.querySelectorAll('.pswp')[0],
			gallery,
			options,
			items;

			items = parseThumbnailElements(galleryElement);

			// define options (if needed)
			options = {

				// There's just one gallery, so use one :)
				// If you need more galleries support something like..
				// galleryUID: galleryElement.getAttribute('data-pswp-uid'),
				galleryUID: '1',

				getThumbBoundsFn: function(index) {
					// See Options -> getThumbBoundsFn section of documentation for more info
					var thumbnail = items[index].el, // find thumbnail
					pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
					rect = thumbnail.getBoundingClientRect();

					return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
				}

			};

			// PhotoSwipe opened from URL
			if(fromURL) {
				if(options.galleryPIDs) {
					// parse real index when custom PIDs are used
					// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
					for(var j = 0; j < items.length; j++) {
						if(items[j].pid === index) {
							options.index = j;
							break;
						}
					}
				} else {
					// in URL indexes start from 1
					options.index = parseInt(index, 10) - 1;
				}
			} else {
				options.index = parseInt(index, 10);
			}

			// exit if index not found
			if( isNaN(options.index) ) {
				return;
			}

			if(disableAnimation) {
				options.showAnimationDuration = 0;
			}

			// Pass data to PhotoSwipe and initialize it
			gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
			gallery.init();
		};

		// triggers when user clicks on thumbnail
		var onThumbnailsClick = function(e) {
			e = e || window.event;
			e.preventDefault ? e.preventDefault() : e.returnValue = false; // jshint ignore:line

			var eTarget = e.target || e.srcElement;

			// find root element of slide
			var clickedListItem = closest(eTarget, function(el) {
				return (el.tagName && el.tagName.toUpperCase() === 'IMG');
			});

			if(!clickedListItem) {
				return;
			}

			// find index of clicked item by looping through all child nodes
			// alternatively, you may define index via data- attribute
			// Set body as clickedGalley, because we only use one gallery
			var clickedGallery = document.querySelector('body'),
			childNodes = document.querySelectorAll('.pswp-img'),
			numChildNodes = childNodes.length,
			nodeIndex = 0,
			index;

			for (var i = 0; i < numChildNodes; i++) {
				if(childNodes[i].nodeType !== 1) {
					continue;
				}

				if(childNodes[i] === clickedListItem) {

					index = nodeIndex;
					break;
				}
				nodeIndex++;
			}

			if(index >= 0) {
				// open PhotoSwipe if valid index found
				openPhotoSwipe( index, clickedGallery );
			}
			return false;
		};

		// parse picture index and gallery index from URL (#&pid=1&gid=2)
		var photoswipeParseHash = function() {
			var hash = window.location.hash.substring(1),
			params = {};

			if(hash.length < 5) {
				return params;
			}

			var vars = hash.split('&');
			for (var i = 0; i < vars.length; i++) {
				if(!vars[i]) {
					continue;
				}
				var pair = vars[i].split('=');
				if(pair.length < 2) {
					continue;
				}
				params[pair[0]] = pair[1];
			}

			if(params.gid) {
				params.gid = parseInt(params.gid, 10);
			}

			return params;
		};


		// loop through all gallery elements and bind events
		var galleryElements = document.querySelectorAll( galleryLinkSelector );

		for(var i = 0, l = galleryElements.length; i < l; i++) {
			galleryElements[i].setAttribute('data-pswp-uid', i+1);
			galleryElements[i].onclick = onThumbnailsClick;
		}

		// Parse URL and open gallery if it contains #&pid=3&gid=1
		var hashData = photoswipeParseHash();
		if(hashData.pid && hashData.gid) {
			// We use body as the gallery element, because we only use one gallery
			var galleryElement = document.querySelectorAll('body')[0];
			openPhotoSwipe( hashData.pid , galleryElement, true, true );
		}
	};
	/**
	 * Return public methods
	 */
	return {
		init : function() {
			initPhotoSwipeFromDOM('.pswp-img');
		}
	};
})();


