$(function () {
  //선택된 배너를 체크할 변수 만들기
  var showBanner = 0;

  function moveBanner() {
    $(".banner")
      .stop()
      .animate(
        {
          "margin-left": -showBanner * 100 + "%",
        },
        500
      );

    $(".circle>li")
      .eq(showBanner)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }

  //왼쪽버튼을 클릭하면 배너가 하나씩 왼쪽으로 이동하도록
  $(".leftBtn").on("click", function () {
    if (showBanner < 4) {
      showBanner++;
    }
    moveBanner();
  });

  //mainBanner에서 마우스를 왼쪽으로, 터치하여 왼쪽으로 드래그하면
  $("#mainBanner").on("swipeleft", function () {
    if (showBanner < 4) {
      showBanner++;
    }
    moveBanner();
  });

  $(".rightBtn").on("click", function () {
    if (showBanner > 0) {
      showBanner--;
    }
    moveBanner();
  });

  $("#mainBanner").on("swiperight", function () {
    $(".rightBtn").trigger("click");
  });
  
});
