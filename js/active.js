$(document).ready(function(){
      $('.main-nav li a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 500);
           return false;
          }
        }
      });
});

$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop() + 5;
        $('.page-section').each(function(i) {
                if ($(this).position().top <= scrollDistance) {
                        $('.navbar ul li a.active').removeClass('active');
                        $('.navbar ul li a').eq(i).addClass('active');
                }
        });
}).scroll();
