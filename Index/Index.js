var eprev = document.getElementById("prev");
var enext = document.getElementById("next");
var imageIndex = document.getElementsByClassName("image-index")[0].children;
var eImageList = document.getElementById("imageList");
var imageTitle = document.getElementsByClassName("image-title")[0];
var titleName = [
  "国立武汉大学",
  "武汉大学行政楼",
  "樱花城堡",
  "武汉大学樱花",
  "武汉大学老图书馆",
  "万林博物馆",
];
var smallImages = document
  .getElementsByClassName("small-images")[0]
  .getElementsByTagName("img");
var smallImagesH2 = document
  .getElementsByClassName("small-images")[0]
  .getElementsByTagName("h2");
var left = 0;
var timer;
var stopTime;
run();
function run() {
  if (left <= -360) {
    left = 0;
  }
  var m = Math.floor(-left / 60);
  imageList.style.marginLeft = left + "em";
  stopTime = left % 60 == 0 ? 1500 : 10;
  if (stopTime == 1500) imageTitle.innerHTML = titleName[m];
  left -= 1;
  timer = setTimeout(run, stopTime);
  iconChange(m);
}

function iconChange(m) {
  for (let index = 0; index < imageIndex.length; index++) {
    imageIndex[index].style.backgroundColor = "";
    imageIndex[index].style.width = "2rem";
  }
  if (m < imageIndex.length) {
    imageIndex[m].style.backgroundColor = "rgba(255,255,255,1)";
    imageIndex[m].style.width = "4rem";
  }
}

//页面定位函数
function imgChange(pageIndex) {
  let it = -(pageIndex * 60);
  imageList.style.marginLeft = it + "em";
  left = it;
  imageTitle.innerHTML = titleName[pageIndex];
}

eprev.onclick = function () {
  let preNum = Math.floor(-left / 60) - 1;
  if (preNum <= -1) {
    preNum = 5;
  }
  imgChange(preNum);
};
enext.onclick = function () {
  let nextNum = Math.floor(-left / 60) + 1;
  if (nextNum >= 6) {
    nextNum = 0;
  }
  imgChange(nextNum);
};
function turnPage() {
  let tg = event.target;
  let ico = tg.innerHTML - 1;
  imgChange(ico);
  iconChange(ico);
}
eImageList.onmousemove = function () {
  clearTimeout(timer);
};
eImageList.onmouseout = function () {
  run();
};
for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].onmousemove = function () {
    smallImagesH2[i].style.display = "block";
  };
  smallImages[i].onmouseout = function () {
    smallImagesH2[i].style.display = "none";
  };
}

//公用js

var containerShow = document.getElementsByClassName("container")[0];
var portal = document.getElementById("portal");

function portalNone() {
  portal.style.display = "none";
}

const time = 2000;
function portalShow() {
  portal.style.display = "block";
  setTimeout(portalNone, time);
}

function upgrade() {
  $("#1").delay(time).fadeIn();
}
$("#imageList img")
  .eq(0)
  .click(function () {
    $("#1").attr("src", "../lu/介绍/example.html");
    portalShow();
    upgrade();
  });
$("#imageList img")
  .eq(1)
  .click(function () {
    $("#1").attr("src", "../lu/预览/page2.html");
    portalShow();
    upgrade();
  });
$("#imageList img")
  .eq(2)
  .click(function () {
    $("#1").attr("src", "../zhao/zhao-html/zhao-first.html");
    portalShow();
    upgrade();
  });
$("#imageList img")
  .eq(3)
  .click(function () {
    $("#1").attr("src", "../zhao/zhao-html/zhao-first.html");
    portalShow();
    upgrade();
  });
$("#imageList img")
  .eq(4)
  .click(function () {
    $("#1").attr("src", "../he/Library/Library.html");
    portalShow();
    upgrade();
  });
$("#imageList img")
  .eq(5)
  .click(function () {
    $("#1").attr("src", "../he/Museum/Museum.html");
    portalShow();
    upgrade();
  });
