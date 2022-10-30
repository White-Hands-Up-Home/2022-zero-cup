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
  let switchThing = (window.innerHeight * 3) / 5; //滚入条件
  let cardTop1 = $cardReverse.getBoundingClientRect().top;
  if (cardTop1 < switchThing) {
    $cardReverse.classList.add("show");
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
