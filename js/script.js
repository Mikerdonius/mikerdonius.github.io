










(function () {
	// Slide In Panel - by CodyHouse.co
	var panelTriggers = document.getElementsByClassName('js-cd-panel-trigger');
	if (panelTriggers.length > 0) {
		for (var i = 0; i < panelTriggers.length; i++) {
			(function (i) {
				var panelClass = 'js-cd-panel-' + panelTriggers[i].getAttribute('data-panel'),
					panel = document.getElementsByClassName(panelClass)[0];
				// open panel when clicking on trigger btn
				panelTriggers[i].addEventListener('click', function (event) {
					event.preventDefault();
					addClass(panel, 'cd-panel--is-visible');
				});
				//close panel when clicking on 'x' or outside the panel
				panel.addEventListener('click', function (event) {
					if (hasClass(event.target, 'js-cd-close') || hasClass(event.target, panelClass)) {
						event.preventDefault();
						removeClass(panel, 'cd-panel--is-visible');
					}
				});
			})(i);
		}
	}

	//class manipulations - needed if classList is not supported
	//https://jaketrent.com/post/addremove-classes-raw-javascript/
	function hasClass(el, className) {
		if (el.classList) return el.classList.contains(className);
		else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	function addClass(el, className) {
		if (el.classList) el.classList.add(className);
		else if (!hasClass(el, className)) el.className += " " + className;
	}
	function removeClass(el, className) {
		if (el.classList) el.classList.remove(className);
		else if (hasClass(el, className)) {
			var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
			el.className = el.className.replace(reg, ' ');
		}
	}
})();
























var modals = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btns = document.getElementsByClassName("openmodal");
var spans = document.getElementsByClassName("close");

// for(let i=0;i<btns.length;i++){
//     btns[i].onclick = function() {
//         modals[i].style.display = "block";
//     }
// }

for (let i = 0; i < spans.length; i++) {
	spans[i].onclick = function () {
		modals[i].style.display = "none";
	}
}

window.onclick = function (event) {
	if (event.target.classList.contains('modal')) {
		for (var i in modals) {
			if (typeof modals[i].style !== 'undefined') modals[i].style.display = "none";
		}
	}
}






document.getElementById('addButton1').addEventListener('click', () => {
	var newdiv = document.createElement('div')
	newdiv.classList.add('myBtn100')
	newdiv.classList.add('bugfix')
	var buttontext = prompt('Fill in text')
	newdiv.textContent = buttontext
	document.getElementById('grid-item2').append(newdiv)
})


document.getElementById('addButton2').addEventListener('click', () => {
	var newdiv = document.createElement('div')
	newdiv.classList.add('myBtn101')
	newdiv.classList.add('bugfix')
	var buttontext = prompt('Fill in text')
	newdiv.textContent = buttontext
	document.getElementById('grid-item2').append(newdiv)
})







