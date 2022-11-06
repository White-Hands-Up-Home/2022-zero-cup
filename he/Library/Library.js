"use strict";
$(".header").click(function () {
  $(".hide").fadeToggle("slow");
});

// 滚动显示
const $main = document.querySelector("main");
const $cardReverse = document.querySelector(".hundred .card");
const $cardRotate = document.querySelector(".century .card");
const $h1 = document.querySelectorAll(".text h1");
const $p = document.querySelectorAll(".text p");
const $mansory = document.querySelector(".mansory");
$main.addEventListener("scroll", function () {
  let switchThing = (window.innerHeight * 3) / 5; //滚入条件判断
  let cardTop1 = $cardReverse.getBoundingClientRect().top; //获取此元素到视口顶部距离
  if (cardTop1 < switchThing) {
    $cardReverse.classList.add("show"); //满足条件时添加类名，执行动画
  } else {
    $cardReverse.classList.remove("show");
  }
  let cardTop2 = $cardRotate.getBoundingClientRect().top;
  if (cardTop2 < switchThing) {
    $cardRotate.classList.add("show");
  } else {
    $cardRotate.classList.remove("show");
  }
  let hTop1 = $h1[0].getBoundingClientRect().top;
  if (hTop1 < switchThing) {
    $h1[0].classList.add("show");
    $p[1].classList.add("show");
  } else {
    $h1[0].classList.remove("show");
    $p[1].classList.remove("show");
  }
  let hTop2 = $h1[1].getBoundingClientRect().top;
  if (hTop2 < switchThing) {
    $h1[1].classList.add("show");
    $p[2].classList.add("show");
  } else {
    $h1[1].classList.remove("show");
    $p[2].classList.remove("show");
  }
  let hTop3 = $h1[2].getBoundingClientRect().top;
  if (hTop3 < switchThing) {
    $(".yellow-palace h1").fadeIn("normal");
    $(".yellow-palace p").fadeIn("slow");
    $mansory.classList.add("show");
  } else {
    $(".yellow-palace h1").fadeOut("normal");
    $(".yellow-palace p").fadeOut("slow");
    $mansory.classList.remove("show");
  }
});
//小箭头滚动事件
$(".arrow").click(function () {
  console.log("fun");
  $main.scrollBy({
    //click事件执行页面滚动，进而配合滚动贴合效果
    top: 100,
    behavior: "smooth", //防止闪现
  });
});

//传送门特效
const time = 2000;
var portal = parent.document.getElementById("portal"); //获取父页面的传送门视频

function portalNone() {
  //隐藏视频
  portal.style.display = "none";
}

function portalShow() {
  //先展现视频，随即隐藏
  portal.style.display = "block";
  setTimeout(portalNone, time);
}
function upgrade() {
  $("#1", parent.document).delay(time).fadeIn(); //用fadeIn（）让过渡更平滑
}
function jumpToIndex() {
  portalShow();
  $("#1", parent.document).delay(time).fadeOut();
}

function jumpToNext() {
  portalShow();
  setTimeout(function () {
    $("#1", parent.document).attr("src", "../he/Museum/Museum.html"); //动态添加iframe的地址，让浏览器分次加载页面，减少初入页面的卡顿感
  }, time);
  upgrade();
}
