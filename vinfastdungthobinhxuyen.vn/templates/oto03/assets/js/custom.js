 $(".btn-a").click(function() {
    $('.content-category').toggleClass('transform-active');
    if(!$('.content-category').hasClass('transform-active')){
        $('html, body').animate({
            scrollTop: $('#content-block').offset().top - 85
        }, 'slow');
    }
});

// gim-header-man-hinh//
$(window).scroll(function() {
    if ($(this).scrollTop() > 161) {
        $('.setting-menu').addClass('fixed');
    } else {
        $('.setting-menu').removeClass('fixed');
    }
});
// gim-header-man-hinh//



//btn back to top
var btn = $('#btn-back-top');
    
$(window).scroll(function() {
  if ($(window).scrollTop() > 30) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '30');
});