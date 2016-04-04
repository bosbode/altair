/**
 * mobile.scripts.js
 *
 * Custom mobile specific scripts
 */

// Executed on DOM ready
domready(function () {

	lazysizes.init();                         // Init lazysizes
	alerts.init(push_message);                // Init alerts
	expand.init();                            // Init expand / collapse
	fontobserver.init();                      // Init font(face)observer
	navMain.init();                           // Init main navigation
	// smoothScroll.init();                      // Init smoothscroll
	// gumshoe.init();                           // Init gumshoe (scrollspy)
	// photoswipegallery.init();                 // Init photoswipe

});
