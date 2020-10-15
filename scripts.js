new SmoothScroll('a[href*="#"]' , {
    easing: 'linear'
});

$(window).on('scroll load' , function () {

    if($('#about .container').offset().top - $(window).scrollTop() < $(window).height() - 200){
        $('#about .container').addClass('slideInRight').removeClass('invisible');
    }

    $('#authors .card').each(function () {
        if($(this).offset().top - $(window).scrollTop() < $(window).height() - 200){
            $(this).addClass('zoomIn').removeClass('invisible');
        }
    });

    if($('#contact form').offset().top - $(window).scrollTop() < $(window).height() - 200){
        $('#contact .col-lg-9').addClass('slideInRight').removeClass('invisible');
        $('#contact .col-lg-3').addClass('slideInUp').removeClass('invisible');
    }
});