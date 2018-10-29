// on init
document.addEventListener('DOMContentLoaded', onInit);
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var lang = "";

function onInit() {
    var y = new Date().getFullYear();
    document.getElementById("yearNow").innerHTML = y;

    if (listProduct.length != 0) productList();

    // screenSize();

    // localStorage.removeItem("language");
    // debugger;
    setLang();
    // contentLang();
    if (career != undefined || career != null) { jobs(career) }
    // debugger;

}
var executed = false;
// set language
function setLang(val) {
    window.localStorage.language = !val ? "TH" : val;
    lang = window.localStorage.language;
    // var tt = document.getElementsByTagName('script');
    // if (lang == "TH") {
    //  tt[3].src = ""
    // }else{

    // }
    // executed = exe;
    // tt[2].src = "http://localhost/lsproject/assets/js/json/" + lang + "/product.js"
    // debugger;
    // location.reload(true);
    // if (executed) {
    //     // executed = true;
    // location.reload(true);
    // }
    // console.log(lang);
}

// modal
var body = document.getElementsByTagName("body");
var mainModal = document.getElementsByClassName("cw-modal");

function isModal(val, key) {
    var position = document.getElementsByClassName("position");
    var exp = document.getElementsByClassName("expired");
    var resp = document.getElementsByClassName("responsibility");
    var sow = document.getElementsByClassName("scopeOfWork");

    var sex = document.getElementsByClassName("sex");
    var edu = document.getElementsByClassName("edu");
    var age = document.getElementsByClassName("age");
    var expr = document.getElementsByClassName("expr");
    var special = document.getElementsByClassName("speciallist");

    body[0].className = body[0].className == '' ? 'freeze' : '';
    mainModal[0].style.display = mainModal[0].style.display == '' || mainModal[0].style.display == 'none' ? 'block' : 'none';

    position[0].innerHTML = career[key].title;
    exp[0].innerHTML = career[key].date + " " + career[key].year;
    // clear ul before adding
    resp[0].innerHTML = career[key].resp == undefined ? '-' : career[key].resp;
    sow[0].innerHTML = career[key].sow == undefined ? '-' : career[key].sow;
    sex[0].innerHTML = career[key].sex == undefined ? '-' : career[key].sex;
    edu[0].innerHTML = career[key].edu == undefined ? '-' : career[key].edu;
    age[0].innerHTML = career[key].age == undefined ? '-' : career[key].age;
    expr[0].innerHTML = career[key].expr == undefined ? '-' : career[key].expr;
    special[0].innerHTML = career[key].specialist == undefined ? '-' : career[key].specialist;
}

function jobs(val) {
    for (var i = 0; i < val.length; i++) {
        var left = "<div class='cb-left'><div class='cb-title'><strong>ตำแหน่ง: " + val[i].title + "</strong></div><div class='cb-info'><span>การศึกษา: " + val[i].edu + "</span><br><span>ประสบการณ์: " + val[i].expr + "</span></div><div class='cb-foot'><a href='#'>(ดูรายละเอียดเพิ่มเติม)</a></div></div>";
        var right = "<div class='cb-right'><div class='expired-box'>วันที่ประกาศ-หมดเขต (" + val[i].date + " " + val[i].year + ")</div><div class='cb-foot'><button class='btn'>สมัครเลย</button></div></div>";
        var mainDiv = "<div class='cw-box shadow' onclick='isModal(true," + i + ")'>" + left + right + "<div class='clearfix'></div></div>";
        $(".career-wrap").append(mainDiv);
    }

}

// open sub menu
function isOpenSub(val) {
    val.children[1].className = val.children[1].className == "sub-menu" ? "sub-menu show" : "sub-menu";
}

// Product
var listProduct = document.getElementsByClassName('list-product');
var listItem = document.getElementsByClassName('lp-item');

// if (listProduct.length != 0) {
//     var listWidth = listProduct[0].clientWidth;
// }

// if (width > 1024) {
//     listWidth = listWidth / 4;
// } else {
//     listWidth = listWidth / 3;
// }

// function screenSize() {
//     for (var i = 0; i < listItem.length; i++) {
//         listItem[i].style.width = listWidth + 'px';
//         listItem[i].style.height = listWidth + 'px';
//         listItem[i].children[0].children[0].style.maxWidth = listWidth + 'px';
//         listItem[i].children[0].children[0].style.maxHeight = listWidth + 'px';
//     }
// }

function productList(type, val) {

    if (listProduct[0].children.length > 0) {
        while (listProduct[0].firstChild) {
            listProduct[0].removeChild(listProduct[0].firstChild);
        }
    }

    for (var i = 0; i < productItem.length; i++) {
        if (type == undefined) {
            createListProduct(productItem[i]);
        } else if (type == 'agi') {
            if (productItem[i].type == 'agi') {
                createListProduct(productItem[i]);
            }
        } else if (type == 'food') {
            if (productItem[i].type == 'food') {
                createListProduct(productItem[i]);
            }
        } else if (type == 'phamacies') {
            if (productItem[i].type == 'phamacies') {
                createListProduct(productItem[i]);
            }
        }
    }

    tabSelected(type, val);
    // screenSize();
}

var countProd = 0;
var proListSrc = '';

function createListProduct(val) {
    var totalList = '';
    var totalProductType = '';
    countProd++;
    // img list
    for (var p = 0; p < val.src.length; p++) {
        var divLLimg = "<img class='prod-list" + p + "" + countProd + "' src='assets/images/products/" + val.src[p] + "'>";
        var divLLCell = "<div class='box-cell'>" + divLLimg + "</div>";
        var divLLitem = "<div class='lp-img box-table' onmouseover='proListHover(this," + p + ",true," + countProd + ")' onmouseout='proListHover(this," + p + ",false," + countProd + ")'>" + divLLCell + "</div>";
        totalList += divLLitem;
    }

    // plastic type
    for (var q = 0; q < val.plasticType.length; q++) {
        totalProductType += "<img src='assets/images/plastic_type/" + val.plasticType[q] + ".png' alt='" + val.plasticType[q] + "'>"
    }

    // set name and code
    //  // is old version
    // var divInfo = "<div class='ll-info'><div class='lin-title'>ชื่อสินค้า</div><div class='lin-name'>" + val.name + "</div><div class='clearfix'></div></div>"
    // var divSubInfo = "<div class='ll-info sub'><div class='lin-title'>รหัสสินค้า</div><div class='lin-name'>" + val.code + "</div><div class='clearfix'></div></div>"

    var divInfoName = "<div class='li-info'><div class='lin-title'>ชื่อสินค้า</div><div class='lin-name'>" + val.name + "</div><div class='clearfix'></div></div>";
    var divInfoCode = "<div class='lsi-wrap'><div class='lin-title sub'>รหัสสินค้า</div><div class='lin-name sub'>" + val.code + "</div><div class='clearfix'></div></div>";

    var divSubInfoList = "<div class='li-sub-info'>" + divInfoCode + "<div class='lsi-wrap'>" + totalProductType + "</div><div class='clearfix'></div></div>";

    var divImg = "<img class='prod-main-img" + countProd + "' src='assets/images/products/" + val.src[0] + "'>";
    var divBoxCell = "<div class='box-cell'>" + divImg + "</div>";
    // var divLpImg = "<div class='lp-img box-table'>" + divBoxCell + "</div><div class='lp-img-list'>" + totalList + "<div class='clearfix'></div></div><div class='lp-info'><div class='li-left'>" + divInfo + divSubInfo + "</div><div class='li-right'>" + totalProductType + "</div></div>";
    var divLpImg = "<div class='lp-img box-table'>" + divBoxCell + "</div><div class='lp-img-list'>" + totalList + "<div class='clearfix'></div></div><div class='lp-info'>" + divInfoName + divSubInfoList + "</div>";
    var divLpItem = "<div class='lp-item shadow' onclick='modalProduct(" + JSON.stringify(val) + ")'>" + divLpImg + "</div>";
    $(".list-product").append(divLpItem);
}


function proListHover(val, key, bool, uni) {
    var mainImg = document.getElementsByClassName("prod-main-img" + uni)[0];
    var isSelectedImg = document.getElementsByClassName("prod-list" + key + uni)[0];

    if (bool) {
        proListSrc = mainImg.src;
        mainImg.src = isSelectedImg.src;
    } else {
        mainImg.src = proListSrc;
        proListSrc = '';
    }
}

function modalProduct(val, key) {
    var pName = document.getElementsByClassName("name");
    var pCode = document.getElementsByClassName("code");
    var pDesc = document.getElementsByClassName("description");

    body[0].className = body[0].className == '' ? 'freeze' : '';
    mainModal[0].style.display = mainModal[0].style.display == '' || mainModal[0].style.display == 'none' ? 'block' : 'none';

    pName[0].innerHTML = val.name;
    pCode[0].innerHTML = val.code;
    pDesc[0].innerHTML = val.description;

    var cwMainImg, cwListImg = "";

    if (val) {
        cwMainImg = "<div class='ci-free-space'><div class='box-table'><div class='box-cell'><img class='prod-modal-main' src='assets/images/products/" + val.src[0] + "'></div></div></div>"
        $(".ci-wrap").append(cwMainImg);

        for (var a = 0; a < val.src.length; a++) {
            var divLLimg = "<img class='prod-modal-list" + a + "' onclick='isImgModal(this," + a + ")' src='assets/images/products/" + val.src[a] + "'>";
            var divLLCell = "<div class='box-cell'>" + divLLimg + "</div>";
            var divLLitem = "<div class='box-table'>" + divLLCell + "</div>";
            cwListImg += divLLitem;
        }
        $(".ci-wrap-list").append(cwListImg);
    } else {
        // clear img
        var cw = $(".ci-wrap")[0];
        var cwl = $(".ci-wrap-list")[0];
        if (cw.children.length > 0) {
            while (cw.firstChild) {
                cw.removeChild(cw.firstChild);
            }
        }
        if (cwl.children.length > 0) {
            while (cwl.firstChild) {
                cwl.removeChild(cwl.firstChild);
            }
        }
    }

}

function isImgModal(val, key) {
    var pmm = document.getElementsByClassName('prod-modal-main')[0];
    pmm.src = val.src;
}

function tabSelected(val, val2) {
    var ul = document.getElementsByClassName('np-menu');
    for (var i = 0; i < ul[0].children.length; i++) {
        if (ul[0].children[i].classList.contains('actived')) {
            ul[0].children[i].classList.remove('actived');
        }
    }
    if (val == undefined) {
        if (val2 === undefined) {
            ul[0].children[0].classList.add('actived');
        } else {
            val2.classList.add('actived');
        }
    } else if (val == 'agi') {
        val2.classList.add('actived');
    } else if (val == 'food') {
        val2.classList.add('actived');
    } else if (val == 'phamacies') {
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
$(document).ready(function() {
    $('.owl-one').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 12000,
        autoplayHoverPause: true
    })
    $('.owl-two').owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000
    })
});