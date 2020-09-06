$(function(){
    /*  Кнопка*/
    let btnUp = $('.btnUp');
    $(btnUp).on('click',  function(evt){
        evt.preventDefault();

        $('html').animate({
            scrollTop: 0,
        }, 300)
    })

    function checkDis(){
        console.log($(this).scrollTop())
        if($(this).scrollTop() > 800){
            $(btnUp).css('opacity', 1);
        }else{
            $(btnUp).css('opacity', 0);
        }
    }
    checkDis();
    $(window).on('scroll',  function(){
        checkDis();
    })

    /* Слайдер */
    $('.slick_wrap').css('position', 'relative').slick({
        dots: true,
        prevArrow: '<button id="prev" type="button" class="btn slick-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn slick-next"></button>',
    });

    /* Мобильное меню */
    let menu = $('.nav_menu');
    $('.nav--btn').on('click', function(){
       if($(menu).css('display') == 'none'){
            $(menu).show(300);

        }else{
            $(menu).hide(300);
            menu.css('display', 'block');
        }
    })

   $(window).resize(function() {
        if($(this).width() > 800){
            menu.css('display', 'block');
        }else{
            menu.css('display', 'none');
        }
    });

    /* Плавные ссылки */

    $('.nav_menu_link').on('click', function(){
        let elem = $($(this).attr('href'));

        $('html').animate({
            scrollTop: elem.offset().top - 100,
        }, 500)
    })
})
