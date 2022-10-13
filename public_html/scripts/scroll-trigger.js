var navItem = document.getElementsByClassName('navbar-item');

var titleHeight = 110;			// includes gradientHeight
var gradientHeight = 20;
var pageHeight = 120;
var lastHeight = convertVHToVW(23) + 15;
var offset = 20;
var scrollLimit = titleHeight + pageHeight * 3 + lastHeight;

var iconContainer = document.getElementsByClassName('icon-container');

var navbar = document.getElementsByClassName('navbar');
var navbarbg = document.getElementsByClassName('navbar-bg');
var navbarcircle = document.getElementsByClassName('navbar-bg-circle');

window.onscroll = function () { 
	var yScroll = dw_getScrollOffsets().y;
	if (yScroll > 0 && navbar[0].classList.contains("initial")) {
		navbar[0].classList.remove("initial");
		navbar[0].classList.remove("expandBar");
		navbar[0].classList.add("collapseBar");
		navbarbg[0].classList.add("collapseBG");
		navbarcircle[0].classList.add("collapseCircle");
	}
};

function dw_getScrollOffsets() {
	var doc = document, w = window;
	var x, y, docEl;
	
	if (typeof w.pageYOffset === 'number') {
		y = w.pageYOffset;
	} else {
		docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
				doc.documentElement: doc.body;
		y = docEl.scrollTop;
	}
	return {y:convertPXToVH(y)};
}

function convertPXToVH(px) {
	return px * (100 / document.documentElement.clientHeight);
}

function convertVHToVW(vh) {
	return vh * (document.documentElement.clientWidth / document.documentElement.clientHeight);
}