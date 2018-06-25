// on init
document.addEventListener('DOMContentLoaded',onInit);
function onInit() {
}
// slide
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (slides.length != 0) {
	    for (i = 0; i < slides.length; i++) {
	       slides[i].style.display = "none";  
	    }
	    slideIndex++;
	    if (slideIndex > slides.length) {slideIndex = 1}    
	    slides[slideIndex-1].style.display = "block";  
	    setTimeout(showSlides, 14000);
    }
}
var career = [
	{
		id: 1,
		title: 'test',
		specialist: ['hello','this','is','a','test'],
		education: ['this','is','a','education']
	},
	{
		id: 2,
		title: 'hello',
		specialist: ['hello','test'],
		education: ['this','education']
	},
	{
		id: 3,
		title: 'there',
		specialist: ['hello','this','is','a','test'],
		education: ['this','is','a','education']
	}
]

// modal
var body = document.getElementsByTagName("body");
var mainModal = document.getElementsByClassName("cw-modal");
function isModal(val,key) {
	var title = document.getElementsByClassName("title");
	var special = document.getElementsByClassName("specialist");
	var educa = document.getElementsByClassName("education");
	body[0].className = body[0].className == '' ? 'freeze' : '';
	mainModal[0].style.display = mainModal[0].style.display == '' || mainModal[0].style.display == 'none' ? 'block' : 'none';

	title[0].innerHTML = career[key].title;
	// clear ul before adding
	if (special[0].children.length > 0) {
		while (special[0].firstChild) {
		    special[0].removeChild(special[0].firstChild);
		}
	}
	if (educa[0].children.length > 0) {
		while (educa[0].firstChild) {
		    educa[0].removeChild(educa[0].firstChild);
		}
	}
	// it for special
	for (var i = 0; i < career[key].specialist.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = career[key].specialist[i];
		special[0].appendChild(li);
	}
	// it for education
	for (var i = 0; i < career[key].education.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = career[key].education[i];
		educa[0].appendChild(li);
	}
}