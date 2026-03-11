$(document).ready(function() {
    // Menu Mobile
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').slideToggle();
        $(this).find('i').toggleClass('fa-bars fa-xmark');
    });

    // Fechar menu ao clicar no link
    $('#mobile_nav_list a').on('click', function() {
        $('#mobile_menu').hide();
        $('#mobile_btn').find('i').addClass('fa-bars').removeClass('fa-xmark');
    });

    // Sombra no header ao rolar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#header').addClass('shadow');
        } else {
            $('#header').removeClass('shadow');
        }
    });
});