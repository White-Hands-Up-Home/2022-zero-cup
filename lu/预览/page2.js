//开场动画
let side1 = document.getElementById("side1");
let side2 = document.getElementById("side2");

window.addEventListener("scroll", function () {
  side1.style.left = -window.pageYOffset + "px";
  side2.style.left = window.pageYOffset + "px";
});

const wh = window.innerHeight;
const sectionBlock = Array.from(
  document.querySelectorAll(".section-item__block")
);
window.addEventListener("scroll", function () {
  sectionBlock.forEach((el) => {
    const { bottom, top, height } = el.getBoundingClientRect();
    if (bottom <= 0 || top >= wh) return;
    const y = document.documentElement.scrollTop * 0.28;
    el.style.backgroundPosition = `center -${y}px`;
  });
});

//传送门特效
const time = 2000;
var portal = parent.document.getElementById("portal");
console.log(portal);
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
    $("#1", parent.document).attr("src", "../zhao/zhao-html/zhao-first.html");
  }, time);
  upgrade();
}
