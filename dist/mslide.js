var listOfImg = [];
var listOfImgTags = document.getElementsByClassName('main-slide')[0].getElementsByTagName('img');
for (var i = 0; i < listOfImgTags.length; i++) {
    listOfImg.push(listOfImgTags[i].getAttribute('src'));
}
;
var nodeOfSlider = document.getElementsByClassName('main-slide')[0];
var listOfBalls = '';
for (var i = 0; i < listOfImg.length; i++) {
    if (i == 0) {
        listOfBalls = listOfBalls + '<div class="ball-slide act"></div>';
    }
    else {
        listOfBalls = listOfBalls + '<div class="ball-slide"></div>';
    }
}
var iMainImg = 0;
var iPreImg;
var iNextImg;
if (listOfImg.length == 1) {
    iPreImg = 0;
}
else {
    if (listOfImg.length == 2) {
        iPreImg = 1;
    }
    else {
        iPreImg = listOfImg.length - 1;
    }
}
if (listOfImg.length == 1) {
    iNextImg = 0;
}
else {
    iNextImg = 1;
}
var mainImg = listOfImg[iMainImg];
var preImg = listOfImg[iPreImg];
var nextImg = listOfImg[iNextImg];
var colorBalls = function () {
    var newListOfBalls = document.getElementsByClassName('ball-slide');
    for (var i = 0; i < newListOfBalls.length; i++) {
        if (i == iMainImg) {
            newListOfBalls[i].setAttribute('class', 'ball-slide act');
        }
        else {
            newListOfBalls[i].setAttribute('class', 'ball-slide');
        }
    }
};
var lBtnAfter = function (elem) {
    elem.removeAttribute('disabled');
    document.getElementById('MImg').style.backgroundImage = "url(" + mainImg + ")";
    document.getElementById('preImg').style.transition = 'none';
    document.getElementById('preImg').style.opacity = '0';
    document.getElementById('preImg').style.backgroundImage = "url(" + preImg + ")";
    document.getElementById('nextImg').style.backgroundImage = "url(" + nextImg + ")";
};
var lBtn = function (elem) {
    elem.setAttribute('disabled', 'disabled');
    if (iMainImg == 0) {
        iMainImg = listOfImg.length - 1;
    }
    else {
        iMainImg = iMainImg - 1;
    }
    if (iPreImg == 0) {
        iPreImg = listOfImg.length - 1;
    }
    else {
        iPreImg = iPreImg - 1;
    }
    if (iNextImg == 0) {
        iNextImg = listOfImg.length - 1;
    }
    else {
        if (iMainImg == listOfImg.length - 1) {
            iNextImg = 0;
        }
        else {
            iNextImg = iMainImg + 1;
        }
    }
    preImg = listOfImg[iPreImg];
    mainImg = listOfImg[iMainImg];
    nextImg = listOfImg[iNextImg];
    console.log('iPreImg - ' + iPreImg);
    console.log('iMainImg - ' + iMainImg);
    console.log('iNextImg - ' + iNextImg);
    document.getElementById('preImg').style.transition = 'opacity 0.5s';
    document.getElementById('preImg').style.opacity = '1';
    colorBalls();
    setTimeout(lBtnAfter, 500, elem);
};
var rBtnAfter = function (elem) {
    elem.removeAttribute('disabled');
    document.getElementById('MImg').style.backgroundImage = "url(" + mainImg + ")";
    document.getElementById('nextImg').style.transition = 'none';
    document.getElementById('nextImg').style.opacity = '0';
    document.getElementById('nextImg').style.backgroundImage = "url(" + nextImg + ")";
    document.getElementById('preImg').style.backgroundImage = "url(" + preImg + ")";
};
var rBtn = function (elem) {
    elem.setAttribute('disabled', 'disabled');
    if (iMainImg == listOfImg.length - 1) {
        iMainImg = 0;
    }
    else {
        iMainImg = iMainImg + 1;
    }
    if (iPreImg == listOfImg.length - 1) {
        iPreImg = 0;
    }
    else {
        if (iMainImg == 0) {
            iPreImg = listOfImg.length - 1;
        }
        else {
            iPreImg = iMainImg - 1;
        }
    }
    if (iNextImg == listOfImg.length - 1) {
        iNextImg = 0;
    }
    else {
        iNextImg = iNextImg + 1;
    }
    nextImg = listOfImg[iNextImg];
    mainImg = listOfImg[iMainImg];
    preImg = listOfImg[iPreImg];
    console.log('iPreImg - ' + iPreImg);
    console.log('iMainImg - ' + iMainImg);
    console.log('iNextImg - ' + iNextImg);
    document.getElementById('nextImg').style.transition = 'opacity 0.5s';
    document.getElementById('nextImg').style.opacity = '1';
    colorBalls();
    setTimeout(rBtnAfter, 500, elem);
};
var timerSlideAfter = function () {
    document.getElementById('MImg').style.backgroundImage = "url(" + mainImg + ")";
    document.getElementById('nextImg').style.transition = 'none';
    document.getElementById('nextImg').style.opacity = '0';
    document.getElementById('nextImg').style.backgroundImage = "url(" + nextImg + ")";
    document.getElementById('preImg').style.backgroundImage = "url(" + preImg + ")";
};
var timerSlide = function () {
    if (iMainImg == listOfImg.length - 1) {
        iMainImg = 0;
    }
    else {
        iMainImg = iMainImg + 1;
    }
    if (iPreImg == listOfImg.length - 1) {
        iPreImg = 0;
    }
    else {
        if (iMainImg == 0) {
            iPreImg = listOfImg.length - 1;
        }
        else {
            iPreImg = iMainImg - 1;
        }
    }
    if (iNextImg == listOfImg.length - 1) {
        iNextImg = 0;
    }
    else {
        iNextImg = iNextImg + 1;
    }
    nextImg = listOfImg[iNextImg];
    mainImg = listOfImg[iMainImg];
    preImg = listOfImg[iPreImg];
    console.log('iPreImg - ' + iPreImg);
    console.log('iMainImg - ' + iMainImg);
    console.log('iNextImg - ' + iNextImg);
    document.getElementById('nextImg').style.transition = 'opacity 0.5s';
    document.getElementById('nextImg').style.opacity = '1';
    colorBalls();
    setTimeout(timerSlideAfter, 500);
};
nodeOfSlider.innerHTML = "<div class=\"gmain-slide\">\n<div id=\"sliders-box\">\n<div style=\"background-image: url(" + preImg + ");\" class=\"slide-img hide-img\" id=\"preImg\"></div>\n<div style=\"background-image: url(" + mainImg + ");\" class=\"slide-img\" id=\"MImg\"></div>\n<div style=\"background-image: url(" + nextImg + ");\" class=\"slide-img hide-img\" id=\"nextImg\"></div>\n</div>  \n<div class=\"left-slide\">\n    <button class=\"slide-btn\" onclick=\"lBtn(this);\"><div class=\"lArr\"></div></button>\n</div>\n<div class=\"right-slide\">\n    <button class=\"slide-btn\" onclick=\"rBtn(this);\"><div class=\"rArr\"></button>\n</div>\n<div class=\"ctrl-slide\">\n    " + listOfBalls + "\n</div>\n</div>";
var timeOfSlide = setInterval(timerSlide, 4000);
