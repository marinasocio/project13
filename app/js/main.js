$(function(){

    $(".services__block .items__cover .items").click(function() {
        $(".services__block .items__cover .tab").removeClass("active").eq($(this).index()).addClass("active");
         $(".services__block .tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    $('.slider__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        infinite: false
    });
    
    $(".menu, .go__to-home, go__to-footer").on("click", "a", function (event){
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });


});