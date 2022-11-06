$.fn.timeline = function () {
  var selectors = {
    id: $(this),
    item: $(this).find(".item"),
    activeClass: "item-active",
    img: ".img",
  };
  /*切换背景图*/
  selectors.item.eq(0).addClass(selectors.activeClass);
  selectors.id.css(
    "background-image",
    "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
  );
  var itemLength = selectors.item.length;
  $(window).scroll(function () {
    var max, min;
    var pos = $(this).scrollTop(); //用js监听到顶部的距离
    selectors.item.each(function (i) {
      min = $(this).offset().top;
      max = $(this).height() + $(this).offset().top;
      var that = $(this);
      if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
        selectors.item.removeClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" + selectors.item.last().find(selectors.img).attr("src") + ")"
        );
        selectors.item.last().addClass(selectors.activeClass);
      } else if (pos <= max - 40 && pos >= min) {
        selectors.id.css(
          "background-image",
          "url(" + $(this).find(selectors.img).attr("src") + ")"
        );
        selectors.item.removeClass(selectors.activeClass);
        $(this).addClass(selectors.activeClass);
      }
    });
  });
};

$("#1").timeline();
