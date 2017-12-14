$(function() {
  // #to-topを消す
  $('#to-top').hide();

  // スクロールが十分されたら#to-topを表示、スクロールが戻ったら非表示
  $(window).scroll(function() {
      $('#pos').text($(this).scrollTop());
      if ($(this).scrollTop() > 60) {
          $('#to-top').fadeIn();
      } else {
          $('#to-top').fadeOut();
      }
  });

  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});
