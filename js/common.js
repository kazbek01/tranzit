$(document).ready(function(){

    $('.call-search').on('click', function () {
        $('.search-box').addClass('showed');
        $('.overlay').addClass('overlay-showed');
    });

    $('.overlay').on('click', function () {
        $('.search-box').removeClass('showed');
        $('.overlay').removeClass('overlay-showed');
    });

    $('.call-menu').on('click', function () {
        $('.menu-box').addClass('m-showed');
    });

    $('.close-menu').on('click', function () {
        $('.menu-box').removeClass('m-showed');
    });
    new WOW().init();

});





