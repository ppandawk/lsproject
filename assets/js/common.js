// on init
document.addEventListener('DOMContentLoaded',onInit);
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var lang = "";
function onInit() {
    var y = new Date().getFullYear();
    document.getElementById("yearNow").innerHTML = y;

	if(listProduct.length != 0){
		productList();
	}
	screenSize();

	// localStorage.removeItem("language");
	setLang();
	// contentLang();
}

// set language
function setLang(val){
	window.localStorage.language = !val ? "TH" : val;
	lang = window.localStorage.language;
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

// open sub menu
function isOpenSub(val) {
	val.children[1].className = val.children[1].className == "sub-menu" ? "sub-menu show" : "sub-menu";
}

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


// Product

var listProduct = document.getElementsByClassName('list-product');
var listItem = document.getElementsByClassName('lp-item');
if (listProduct.length != 0){
	var listWidth = listProduct[0].clientWidth;
}

if(width > 1024){
	listWidth = listWidth / 4;
}else {
	listWidth = listWidth / 3;
}

function screenSize() {
	for (var i = 0; i < listItem.length; i++) {
		listItem[i].style.width = listWidth + 'px';
		listItem[i].style.height = listWidth + 'px';
		listItem[i].children[0].children[0].style.maxWidth = listWidth + 'px';
		listItem[i].children[0].children[0].style.maxHeight = listWidth + 'px';
	}
}

var productItem = [
	{
		id: 1,
		title: 'test',
		src: 'assets/images/products/1.png',
		type: 'agi'
	},
	{
		id: 2,
		title: 'hello',
		src: 'assets/images/products/2.png',
		type: 'food'
	},
	{
		id: 3,
		title: 'there',
		src: 'assets/images/products/3.png',
		type: 'phamacies'
	},
	{
		id: 4,
		title: 'there',
		src: 'assets/images/products/4.png',
		type: 'phamacies'
	},
	{
		id: 5,
		title: 'there',
		src: 'assets/images/products/5.png',
		type: 'phamacies'
	},
	{
		id: 6,
		title: 'hello',
		src: 'assets/images/products/6.png',
		type: 'food'
	},
	{
		id: 7,
		title: 'test',
		src: 'assets/images/products/7.png',
		type: 'agi'
	},
	{
		id: 8,
		title: 'test',
		src: 'assets/images/products/8.png',
		type: 'agi'
	},
	{
		id: 9,
		title: 'test',
		src: 'assets/images/products/9.png',
		type: 'agi'
	}
]

function productList(type,val) {
	if (listProduct[0].children.length > 0) {
		while (listProduct[0].firstChild) {
		    listProduct[0].removeChild(listProduct[0].firstChild);
		}
	}

	for (var i = 0; i < productItem.length; i++) {
		if (type == undefined){
			createListProduct(productItem[i].src);
		}else if (type == 'agi') {
			if (productItem[i].type == 'agi') {
				createListProduct(productItem[i].src);
			}
		}else if (type == 'food') {
			if (productItem[i].type == 'food') {
				createListProduct(productItem[i].src);
			}
		}else if (type == 'phamacies') {
			if (productItem[i].type == 'phamacies') {
				createListProduct(productItem[i].src);
			}
		}
	}
	
	tabSelected(type,val);
	screenSize();
}

function createListProduct(val) {
	var div = document.createElement('div');
	div.className = 'lp-item box-table';

	var div2 = document.createElement('div');
	div2.className = 'li-detail box-cell';

	var img = document.createElement('img');
	img.src = val;

	div2.appendChild(img);
	div.appendChild(div2);

	listProduct[0].appendChild(div);
}

function tabSelected(val,val2) {
	var ul = document.getElementsByClassName('np-menu');
	for (var i = 0; i < ul[0].children.length; i++) {
		if (ul[0].children[i].classList.contains('actived')) {
			ul[0].children[i].classList.remove('actived');
		}
	}
	if (val == undefined) {
		if (val2 === undefined) {
			ul[0].children[0].classList.add('actived');
		}else{
			val2.classList.add('actived');
		}
	}else if (val == 'agi') {
		val2.classList.add('actived');
	}else if (val == 'food') {
		val2.classList.add('actived');
	}else if (val == 'phamacies') {
		val2.classList.add('actived');
	}
}


// menu
function toggleMenu() {
	var menuList = document.getElementsByClassName('menu-list');
	var menuLang = document.getElementsByClassName('lang');
	menuList[0].classList.toggle('open');
	menuLang[0].classList.toggle('open');
}


$(document).ready(function(){
	$('.owl-one').owlCarousel({
	    items:1,
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true
	})
	$('.owl-two').owlCarousel({
	    items:4,
	    loop:true,
	    dots:false,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:false
	})
});