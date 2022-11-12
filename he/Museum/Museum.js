"use strict";
// 滑动淡入淡出效果
window.addEventListener("scroll", (e) => {
  let scrolled =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  console.log(scrolled); // 记录滑动的百分比

  let $frontPage = document.querySelector(".front-page");
  let $h1 = document.querySelector("h1");
  let $logoContainer = document.querySelector("#logo-container");
  let $logo = document.querySelector("#logo");
  // 前半万林logo的大小变化
  $logoContainer.style.width =
    document.documentElement.clientWidth * 10 * scrolled * 0.7 + "px";
  $logoContainer.style.height =
    document.documentElement.clientWidth * 3 * scrolled * 0.7 + "px";

  // 前半的渐变
  if (scrolled <= 0.1) {
    $h1.style.opacity = (0.1 - scrolled) / 0.1; //随下滑调整opacity来淡出
    $h1.style.marginTop = scrolled * 1000 * -2 + "px"; //随下滑通过调整margintop向上滑动
  } else {
    $h1.style.opacity = 0;
  }
  if (scrolled >= 0.2) {
    $logo.style.opacity = 0.8 - scrolled * 2; //万林logo的透明度的渐变
  } else if (scrolled < 0.2) {
    $logo.style.opacity = 1;
  } else {
    $logo.style.opacity = 1;
  }
  //后半大小变化
  if (scrolled > 0.5) {
    $frontPage.style.opacity = scrolled;
    $frontPage.style.scale = 1 / scrolled;
  } else {
    $frontPage.style.opacity = 0;
  }
});

// 第二部分
const mouse = { x: 0, y: 0 }; // 记录鼠标的位置

document.querySelector("body").addEventListener("mousemove", ({ x, y }) => {
  mouse.x = x;
  mouse.y = y;
  // console.log(`${x},${y}`)
});

window.requestAnimationFrame(function movement() {
  // console.log(`${mouse.x},${mouse.y}`);
  const xValue = calcValue(mouse.x, window.innerWidth);
  const yValue = calcValue(mouse.y, window.innerHeight); //mouse.x/window.innerWidth代表鼠标在页面的百分比位置，利用下面的calcValue函数换算
  // 图片的旋转
  document.querySelector(
    "#layer-view"
  ).style.transform = `translate3d(${xValue}px, ${yValue}px, 0) rotateX(${-yValue}deg) rotateY(${xValue}deg)`;
  // 文字浮空及旋转
  document.querySelector("#layer-front").style.transform = `translate3d(${
    xValue * 8
  }px, ${yValue * 3}px, 50px) rotateX(${-yValue}deg) rotateY(${xValue}deg)`;

  window.requestAnimationFrame(movement);
});

function calcValue(a, b) {
  //此函数利用此时鼠标在页面的百分比位置计算
  const range = 30;
  return range * (a / b) - range / 2;
  //range用于调节转动幅度，减去1/2range修正转动效果
}

// 加入数据
let infoList = [
  {
    serial: "01", //排序
    title: "万里千年", //展览标题
    desc: "敦煌考古特展", //展览内容
    address: "", //展览图片地址，后面通过js添加
  },
  {
    serial: "02",
    title: "东方欲晓",
    desc: "毛泽东主席艺术形象主题展",
    address: "",
  },
  {
    serial: "03",
    title: "跃时代",
    desc: "高校毕业设计联展",
    address: "",
  },
  {
    serial: "04",
    title: "珞樱缤纷",
    desc: "武汉艺术家邀请展",
    address: "",
  },
  {
    serial: "05",
    title: "生命惊奇",
    desc: "泰康艺术精品展",
    address: "",
  },
  {
    serial: "06",
    title: "珞珞如石",
    desc: "百年积淀 千件藏品",
    address: "",
  },
  {
    serial: "07",
    title: "返本开新",
    desc: "馆藏书画精品展",
    address: "",
  },
  {
    serial: "08",
    title: "百年初心 百年光荣",
    desc: "庆祝中国共产党成立一百周年全国教育书法作品邀请展",
    address: "",
  },
  {
    serial: "09",
    title: "艺术与文化的碰撞",
    desc: "尽在万林",
    address: "",
  },
];

// 加轮播图的图片地址
for (let i = 0; i < infoList.length; i++) {
  infoList[i].address = `./source/img/museum_${i + 1}.png`;
}

//选中元素
let index = 0; //轮播图翻页序号
const layerFront = document.querySelector("#layer-front");
const mediaSerial = layerFront.querySelector(".info-serial");
const mediaTitle = layerFront.querySelector(".info-title");
const mediaDetail = layerFront.querySelector(".info-detail");
const mediaMainPic = document.querySelector("#layer-view .main-pic");
const mediaImage = mediaMainPic.querySelector(".img");
const mediaList = document.querySelector("#list");

// 初始化一下信息
mediaImage.style = `background-image: url(${infoList[0].address}); `;
mediaSerial.innerHTML = infoList[0].serial;
mediaTitle.innerHTML = infoList[0].title;
mediaDetail.innerHTML = infoList[0].desc;

//选中前进后退的按钮
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
//翻页更新信息
btnPrev.addEventListener("click", function () {
  index > 0 ? index-- : (index = infoList.length - 1); //当第一页时上一页是最后一页否则向前翻
  mediaImage.style = `background-image: url(${infoList[index].address});`;
  mediaSerial.innerHTML = infoList[index].serial;
  mediaTitle.innerHTML = infoList[index].title;
  mediaDetail.innerHTML = infoList[index].desc;
});
btnNext.addEventListener("click", function () {
  index < infoList.length - 1 ? index++ : (index = 0);
  mediaImage.style = `background-image: url(${infoList[index].address});`;
  mediaSerial.innerHTML = infoList[index].serial;
  mediaTitle.innerHTML = infoList[index].title;
  mediaDetail.innerHTML = infoList[index].desc;
});

//点击弹出层
let ifOut = 0;
//关闭
console.log($(`#pic${index}`));
console.log(`${index}`);
$(".content").click(function () {
  $(`#pic${index}`).fadeIn("slow");
  ifOut = 1;
});
//显示
$(".all-pic").click(function () {
  if (ifOut === 1) $(".all-pic").fadeOut("slow");
});

//传送门特效
const time = 1000;
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
    $("#1", parent.document).attr("src", "../lu/介绍/example.html"); //动态添加iframe的地址，让浏览器分次加载页面，减少初入页面的卡顿感
  }, time);
  upgrade();
}
