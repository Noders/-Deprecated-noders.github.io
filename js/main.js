(function($) {
    "use strict";

    /*
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });
    */

    /*
    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    */

    new WOW.WOW().init();

    $(".navbar-toggle").on('click', function (e) {
      var navbar = $('.navbar-collapse');
      navbar.toggleClass('collapse')
    });

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 50)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
})(jQuery);
