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
	// screenSize();

	// localStorage.removeItem("language");
	setLang();
	// contentLang();
}

// set language
function setLang(val){
	window.localStorage.language = !val ? "TH" : val;
	lang = window.localStorage.language;
}

var career = [
	{
		id: 1,
		title: 'วิศวะ',
		date: '20 ก.ค. - 20 ส.ค.',
		year: 2018,
		resp: 'responsibility',
		specialist: ['การศึกษา: hello','ประสบการณ์: this','ทักษะ: is','อุปนิสัย: a']
		// education: ['this','is','a','education']
	},
	{
		id: 2,
		title: 'hello',
		date: '20 ก.ค. - 20 ส.ค.',
		year: 2018,
		resp: 'responsibility',
		specialist: ['การศึกษา: hello','ประสบการณ์: this']
		// education: ['this','education']
	},
	{
		id: 3,
		title: 'there',
		date: '20 ก.ค. - 20 ส.ค.',
		year: 2018,
		specialist: ['การศึกษา: hello','ประสบการณ์: this','ทักษะ: is','อุปนิสัย: test']
		// education: ['this','is','a','education']
	}
]

// modal
var body = document.getElementsByTagName("body");
var mainModal = document.getElementsByClassName("cw-modal");
function isModal(val,key) {
	var position = document.getElementsByClassName("position");
	var exp = document.getElementsByClassName("expired");
	var resp = document.getElementsByClassName("responsibility");
	var special = document.getElementsByClassName("specialist");
	// var educa = document.getElementsByClassName("education");
	body[0].className = body[0].className == '' ? 'freeze' : '';
	mainModal[0].style.display = mainModal[0].style.display == '' || mainModal[0].style.display == 'none' ? 'block' : 'none';

	position[0].innerHTML = career[key].title;
	exp[0].innerHTML = career[key].date + " " + career[key].year;
	// clear ul before adding
	resp[0].innerHTML = career[key].resp == undefined ? '-' : career[key].resp;
	if (special[0].children.length > 0) {
		while (special[0].firstChild) {
		    special[0].removeChild(special[0].firstChild);
		}
	}
	// if (educa[0].children.length > 0) {
	// 	while (educa[0].firstChild) {
	// 	    educa[0].removeChild(educa[0].firstChild);
	// 	}
	// }
	// it for special
	for (var i = 0; i < career[key].specialist.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = career[key].specialist[i];
		special[0].appendChild(li);
	}
	// it for education
	// for (var i = 0; i < career[key].education.length; i++) {
	// 	var li = document.createElement('li');
	// 	li.innerHTML = career[key].education[i];
	// 	educa[0].appendChild(li);
	// }
}

// open sub menu
function isOpenSub(val) {
	val.children[1].className = val.children[1].className == "sub-menu" ? "sub-menu show" : "sub-menu";
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
		name: 'test',
		code: '0acs3',
		src: ['assets/images/products/1.png','assets/images/products/2.png','assets/images/products/3.png'],
		plasticType: ['pet','pvc','pp','ps'],
		type: 'agi'
	},
	// ,
	// {
	// 	id: 2,
	// 	title: 'hello',
	// 	src: 'assets/images/products/2.png',
	// 	type: 'food'
	// },
	// {
	// 	id: 3,
	// 	title: 'there',
	// 	src: 'assets/images/products/3.png',
	// 	type: 'phamacies'
	// },
	// {
	// 	id: 4,
	// 	title: 'there',
	// 	src: 'assets/images/products/4.png',
	// 	type: 'phamacies'
	// },
	// {
	// 	id: 5,
	// 	title: 'there',
	// 	src: 'assets/images/products/5.png',
	// 	type: 'phamacies'
	// },
	// {
	// 	id: 6,
	// 	title: 'hello',
	// 	src: 'assets/images/products/6.png',
	// 	type: 'food'
	// },
	// {
	// 	id: 7,
	// 	title: 'test',
	// 	src: 'assets/images/products/7.png',
	// 	type: 'agi'
	// },
	// {
	// 	id: 8,
	// 	title: 'test',
	// 	src: 'assets/images/products/8.png',
	// 	type: 'agi'
	// },
	// {
	// 	id: 9,
	// 	title: 'test',
	// 	src: 'assets/images/products/9.png',
	// 	type: 'agi'
	// }
]

function productList(type,val) {
	if (listProduct[0].children.length > 0) {
		while (listProduct[0].firstChild) {
		    listProduct[0].removeChild(listProduct[0].firstChild);
		}
	}

	for (var i = 0; i < productItem.length; i++) {
		if (type == undefined){
			createListProduct(productItem[i]);
		}else if (type == 'agi') {
			if (productItem[i].type == 'agi') {
				createListProduct(productItem[i]);
			}
		}else if (type == 'food') {
			if (productItem[i].type == 'food') {
				createListProduct(productItem[i]);
			}
		}else if (type == 'phamacies') {
			if (productItem[i].type == 'phamacies') {
				createListProduct(productItem[i]);
			}
		}
	}
	
	tabSelected(type,val);
	// screenSize();
}

function createListProduct(val) {
	var totalList = '';
	var totalProductType = '';

	// img list
	for (var p = 0; p < val.src.length; p++) {
		var divLLimg  = "<img src='" + val.src[p] + "'>";
		var divLLCell = "<div class='box-cell'>" + divLLimg + "</div>";
		var divLLitem = "<div class='lp-img box-table'>" + divLLCell + "</div>";
		totalList += divLLitem;
	}

	// plastic type
	for (var q = 0; q < val.plasticType.length; q++) {
		totalProductType += "<img src='assets/images/plastic_type/" + val.plasticType[q] + ".png' alt='" + val.plasticType[q] + "'>"
	}

	// set name and code
	var divInfo = "<div class='ll-info'><div class='lin-title'>ชื่อสินค้า</div><div class='lin-name'>" + val.name + "</div><div class='clearfix'></div></div>"
	var divSubInfo = "<div class='ll-info sub'><div class='lin-title'>รหัสสินค้า</div><div class='lin-name'>" + val.code + "</div><div class='clearfix'></div></div>"

	var divImg = "<img src='" + val.src[0] + "'>";
	var divBoxCell = "<div class='box-cell'>" + divImg + "</div>";
	var divLpImg = "<div class='lp-img box-table'>" + divBoxCell + "</div><div class='lp-img-list'>" + totalList + "<div class='clearfix'></div></div><div class='lp-info'><div class='li-left'>" + divInfo + divSubInfo + "</div><div class='li-right'>" + totalProductType + "</div></div>";
	var divLpItem = "<div class='lp-item shadow'>" + divLpImg +"</div>";

	$(".list-product").append(divLpItem);
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

// slide
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
	    // autoplay:true,
	    // autoplayTimeout:5000
	})
});