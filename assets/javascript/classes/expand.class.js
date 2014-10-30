/**
 * Expand / collapse
 */

var expand = {
	init: function() {
		var expanders = document.querySelectorAll('.js-expandtarget');
		for (i = 0; i < expanders.length; i++) {
			var expanderid = expanders[i].getAttribute('id');
			if(cookie.get(expanderid)) {
				expanders[i].parentNode.classList.add('is-open');
				expanders[i].parentNode.querySelector('.js-expandbutton').classList.add('is-active');
				// console.log(expanders[i]);
			}
			else {
				expanders[i].parentNode.classList.add('is-closed');
			}
		}

		var expandbuttons = document.querySelectorAll('.js-expandbutton');
		for (i = 0; i < expandbuttons.length; i++) {
			expandbuttons[i].addEventListener('click', expand.toggle, false);
		}
	},

	toggle: function(event) {
		event.preventDefault();
		var button = event.target;
		var targetid = button.getAttribute('href');
		var cookieid = targetid.substring(1);
		var target = document.querySelector(targetid);
		var expandparent = target.parentNode;

		if(expandparent.classList.contains('is-closed')) {
			button.classList.add('is-active');
			expandparent.classList.remove('is-closed');
			expandparent.classList.add('is-open');
			cookie.set(cookieid,'open');
		}
		else {
			button.classList.remove('is-active');
			expandparent.classList.remove('is-open');
			expandparent.classList.add('is-closed');
			cookie.erase(cookieid);
		}
	}
};
