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