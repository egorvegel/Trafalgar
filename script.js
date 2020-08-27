$(function(){
    /*  Кнопка*/
    let btUp = $('.btnUp');
    $(btUp).on('click',  function(evt){
        evt.preventDefault();
        console.log(this);
        $('html').animate({
            scrollTop: 0,
        }, 300)
    })

    function checkDis(){
        if(this.scrollY > 870){
            $(btUp).show(300);
        }else{
            $(btUp).hide(300);
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
        
        adaptiveHeight: true
    });
    
    /* Мобильное меню */
    let menu = $('.nav_menu');
    $('.nav--btn').on('click', function(){
       if($(menu).css('display') == 'none'){
            $(menu).show(300);
        }else{
            $(menu).hide(300);
        }    
    })
    $(window).resize(function() {
        if($(this).width() > 800){
            menu.show(300);
        }
        console.log($(this).width());
    });

    /* Плавные ссылки */

    $('.nav_menu_link').on('click', function(){
        let elem = $($(this).attr('href'));

        $('html').animate({
            scrollTop: elem.offset().top - 100,
        }, 500)
        $(menu).hide(300);
    })
})