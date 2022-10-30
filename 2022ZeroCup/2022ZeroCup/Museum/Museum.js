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
  // 前半的大小变化
  $logoContainer.style.width =
    document.documentElement.clientWidth * 10 * scrolled * 0.7 + "px";
  $logoContainer.style.height =
    document.documentElement.clientWidth * 3 * scrolled * 0.7 + "px";

  // 前半的渐变
  if (scrolled <= 0.1) {
    $h1.style.opacity = (0.1 - scrolled) / 0.1;
    $h1.style.marginTop = scrolled * 1000 * -2 + "px";
  } else {
    $h1.style.opacity = 0;
  }
  if (scrolled >= 0.2) {
    $logo.style.opacity = 0.8 - scrolled * 2;
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
const mouse = { x: 0, y: 0 }; // 鼠标的位置

document.querySelector("body").addEventListener("mousemove", ({ x, y }) => {
  mouse.x = x;
  mouse.y = y;
  // console.log(`${x},${y}`)
});

window.requestAnimationFrame(function movement() {
  console.log(`${mouse.x},${mouse.y}`);
  const xValue = calcValue(mouse.x, window.innerWidth);
  const yValue = calcValue(mouse.y, window.innerHeight);
  // 图片的旋转
  document.querySelector(
    "#media-layer-view"
  ).style.transform = `translate3d(${xValue}px, ${yValue}px, 0) rotateX(${-yValue}deg) rotateY(${xValue}deg)`;
  // 文字浮空及旋转
  document.querySelector("#media-layer-front").style.transform = `translate3d(${
    xValue * 7.7
  }px, ${yValue * 3}px, 50px) rotateX(${-yValue}deg) rotateY(${xValue}deg)`;

  window.requestAnimationFrame(movement);
});

function calcValue(a, b) {
  const range = 30;
  return range * (a / b) - range / 2;
  //range用于调节转动幅度，减去1/2range修正转动效果
}

// 加入数据
let infoList = [
  {
    serial: "01",
    title: "万里千年",
    desc: "敦煌考古特展",
    address: "",
    href: "",
  },
  {
    serial: "02",
    title: "东方欲晓",
    desc: "毛泽东主席艺术形象主题展",
    address: "",
    href: "",
  },
  {
    serial: "03",
    title: "跃时代",
    desc: "高校毕业设计联展",
    address: "",
    href: "",
  },
  {
    serial: "04",
    title: "珞樱缤纷",
    desc: "武汉艺术家邀请展",
    address: "",
    href: "",
  },
  {
    serial: "05",
    title: "生命惊奇",
    desc: "泰康艺术精品展",
    address: "",
    href: "",
  },
  {
    serial: "06",
    title: "珞珞如石",
    desc: "百年积淀 千件藏品",
    address: "",
    href: "",
  },
  {
    serial: "07",
    title: "返本开新",
    desc: "馆藏书画精品展",
    address: "",
    href: "",
  },
  {
    serial: "08",
    title: "百年初心 百年光荣",
    desc: "庆祝中国共产党成立一百周年全国教育书法作品邀请展",
    address: "",
    href: "",
  },
  {
    serial: "09",
    title: "艺术与文化的碰撞",
    desc: "尽在万林",
    address: "",
    href: "",
  },
];

// 加图片地址
for (let i = 0; i < infoList.length; i++) {
  infoList[i].address = `./source/img/museum_${i + 1}.png`;
  // carouselList[i].href = `Museum and Library\source\img\museum_${i + 1}.png`;
}

//选中元素
let index = 0;
const layerFront = document.querySelector("#media-layer-front");
const mediaSerial = layerFront.querySelector(".media-info-serial");
const mediaTitle = layerFront.querySelector(".media-info-title");
const mediaDetail = layerFront.querySelector(".media-info-detail");
const mediaMainPic = document.querySelector(
  "#media-layer-view .media-main-pic"
);
const mediaImage = mediaMainPic.querySelector(".media-img");
const mediaList = document.querySelector("#media-list");

// 初始化一下信息
mediaImage.href = infoList[0].href;
mediaImage.style = `background-image: url(${infoList[0].address}); transform-origin: left top; transform: scale(1)`;
mediaSerial.innerHTML = infoList[0].serial;
mediaTitle.innerHTML = infoList[0].title;
mediaDetail.innerHTML = infoList[0].desc;

//前进和后退
const arrowBtnPrev = document.querySelector("#arrow-btn-prev");
const arrowBtnNext = document.querySelector("#arrow-btn-next");

arrowBtnPrev.addEventListener("click", () => {
  index > 0 ? index-- : (index = infoList.length - 1);
  mediaImage.href = infoList[index].href;
  mediaImage.style = `background-image: url(${infoList[index].address}); transform-origin: left top; transform: scale(1)`;
  mediaSerial.innerHTML = infoList[index].serial;
  mediaTitle.innerHTML = infoList[index].title;
  mediaDetail.innerHTML = infoList[index].desc;
});
arrowBtnNext.addEventListener("click", () => {
  index < infoList.length - 1 ? index++ : (index = 0);
  mediaImage.href = infoList[index].href;
  mediaImage.style = `background-image: url(${infoList[index].address}); transform-origin: left top; transform: scale(1)`;
  mediaSerial.innerHTML = infoList[index].serial;
  mediaTitle.innerHTML = infoList[index].title;
  mediaDetail.innerHTML = infoList[index].desc;
});

//点击弹出层
let ifOut = 0;
//关闭
console.log($(`#pic${index}`));
console.log(`${index}`);
$(".media-main-pic").click(function () {
  $(`#pic${index}`).fadeIn("slow");
  ifOut = 1;
  console.log("ddd");
});
//显示
$(".all-pic").click(function () {
  if (ifOut === 1) $(".all-pic").fadeOut("slow");
});
