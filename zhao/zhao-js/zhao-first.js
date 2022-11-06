//文字滑出
window.onload = function () {
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const container = document.querySelector(".container");
  open.addEventListener("click", () => container.classList.add("show-nav"));
  close.addEventListener("click", () => container.classList.remove("show-nav"));
};

//调节style的display属性值来控制三个子页面的展示
function first() {
  var a = document.getElementsByClassName("A");
  // a[0].style.display = "block";
  $(a[0]).fadeIn();
  var b = document.getElementsByClassName("B");
  b[0].style.display = "none";
  var c = document.getElementsByClassName("C");
  c[0].style.display = "none";
}

function second() {
  var a = document.getElementsByClassName("A");
  a[0].style.display = "none";
  var b = document.getElementsByClassName("B");
  //b[0].style.display = "block";
  $(b[0]).fadeIn();
  var c = document.getElementsByClassName("C");
  c[0].style.display = "none";
}

function third() {
  var a = document.getElementsByClassName("A");
  a[0].style.display = "none";
  var b = document.getElementsByClassName("B");
  b[0].style.display = "none";
  var c = document.getElementsByClassName("C");
  //c[0].style.display = "block";
  $(c[0]).fadeIn();
}

//传送门特效
const time = 2000;
var portal = parent.document.getElementById("portal");

function portalNone() {
  portal.style.display = "none";
}

function portalShow() {
  portal.style.display = "block";
  setTimeout(portalNone, time);
}
function upgrade() {
  $("#1", parent.document).delay(time).fadeIn();
}
function jumpToIndex() {
  portalShow();
  $("#1", parent.document).delay(time).fadeOut();
}

function jumpToNext() {
  portalShow();
  setTimeout(function () {
    $("#1", parent.document).attr("src", "../../he/Library/Library.html");
  }, time);
  upgrade();
}
