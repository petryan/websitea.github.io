$(function() {

    // Owl Carousel

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            1281: {
                items: 3
            }
        }
    });

    $(document).ready(function() {

        // Плавная прокрутка

        $(".scroll a").click(function() {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 1000,
                easing: "swing"
            });
            return false;
        });

        // Кнопка 'Наверх'

        var btn = $('.up');

        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '1600');
        });

        // Бургер-меню

        // $('.header__burger-menu').click(function(e) {
        //     e.preventDefault();
        //     $('ul.header__menu').toggleClass('menu-show');
        //     $('.nav').css('align-items', 'inherit');
        //     $('.header__tel').css('display', 'block');
        //     $('.header__menu').css('text-align', 'center');
        //     $('.header__burger-menu').css('margin', '0');
        // });

        // Бургер-меню

        $('.header__burger-menu').click(function(e) {
            e.preventDefault();
            $('ul.header__menu').toggleClass('menu-show');
            $('ul.header__menu').css('position', 'absolute');
            $('ul.header__menu').css('top', '107px');
            $('ul.header__menu').css('left', '0');
            $('.nav').css('align-items', 'inherit');
            // $('.header__tel').css('align-items', 'baseline');
            $('.header__burger-menu').css('margin-top', '2px');
        });
    });
});