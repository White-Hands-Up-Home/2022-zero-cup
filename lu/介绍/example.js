//鼠标点击出现爱心特效
(function (window, document, undefined) {
  var hearts = [];
  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        setTimeout(callback, 1000 / 60);
      }
    );
  })();
  init();
  function init() {
    css(
      ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
    );
    attachEvent();
    gameloop();
  }
  function gameloop() {
    for (var i = 0; i < hearts.length; i++) {
      if (hearts[i].alpha <= 0) {
        document.body.removeChild(hearts[i].el);
        hearts.splice(i, 1);
        continue;
      }
      hearts[i].y--;
      hearts[i].scale += 0.004;
      hearts[i].alpha -= 0.013;
      hearts[i].el.style.cssText =
        "left:" +
        hearts[i].x +
        "px;top:" +
        hearts[i].y +
        "px;opacity:" +
        hearts[i].alpha +
        ";transform:scale(" +
        hearts[i].scale +
        "," +
        hearts[i].scale +
        ") rotate(45deg);background:" +
        hearts[i].color;
    }
    requestAnimationFrame(gameloop);
  }
  function attachEvent() {
    var old = typeof window.onclick === "function" && window.onclick;
    window.onclick = function (event) {
      old && old();
      createHeart(event);
    };
  }
  function createHeart(event) {
    var d = document.createElement("div");
    d.className = "heart";
    hearts.push({
      el: d,
      x: event.clientX - 5,
      y: event.clientY - 5,
      scale: 1,
      alpha: 1,
      color: randomColor(),
    });
    document.body.appendChild(d);
  }
  function css(css) {
    var style = document.createElement("style");
    style.type = "text/css";
    try {
      style.appendChild(document.createTextNode(css));
    } catch (ex) {
      style.styleSheet.cssText = css;
    }
    document.getElementsByTagName("head")[0].appendChild(style);
  }
  function randomColor() {
    return (
      "rgb(" +
      ~~(Math.random() * 255) +
      "," +
      ~~(Math.random() * 255) +
      "," +
      ~~(Math.random() * 255) +
      ")"
    );
  }
})(window, document);

const boxList = document.querySelectorAll(".box");
scrollLoad();
window.addEventListener("scroll", scrollLoad);
function scrollLoad() {
  boxList.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight * 0.6;
    if (boxTop <= triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var w = window.innerWidth;
var h = window.innerHeight;
canvas.width = w;
canvas.height = h;
var num = 300;
//定义雪花数组
var snows = [];
for (var i = 0; i < num; i++) {
  //向数组填充元素，元素属性有坐标及半径，均为随机生成，其中半径上限为5
  snows.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 5,
  });
}
//绘制图片
function draw() {
  context.clearRect(0, 0, w, h); //清空画布
  context.beginPath(); //画笔开始
  for (var i = 0; i < num; i++) {
    var snow = snows[i];
    context.fillStyle = "pink"; //设定填充方式为白色半透明
    context.moveTo(snow.x, snow.y); //画笔移动到指定坐标处
    context.arc(snow.x, snow.y, snow.r, 0, Math.PI * 2); //根据属性绘制圆形
  }
  context.fill(); //填充路径
  //雪片落下
  move();
}
function move() {
  for (var i = 0; i < num; i++) {
    var snow = snows[i];
    snow.y += (7 - snow.r) / 10; //根据雪片大小调整落下速度
    if (snow.y > h) {
      //如果雪片超出画布范围，则在顶端重绘
      snows[i] = { x: Math.random() * w, y: 0, r: snow.r };
    }
  }
}
//执行和调用函数
draw();
setInterval(draw, 1); //每隔一毫秒重绘一次

//传送门特效
const time = 1000;
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
    $("#1", parent.document).attr("src", "../lu/预览/page2.html");
  }, time);
  upgrade();
}
