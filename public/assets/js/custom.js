$(document)
  .mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.clientX,
        top: e.clientY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.clientX,
          top: e.clientY
        });
    }, 100);
  });
  $(window).on('scroll', function(){
    $(function(){
      if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
      };
    });
  });