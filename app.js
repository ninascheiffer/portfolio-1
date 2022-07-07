$(window).scroll(function(){
    var windowTop = $(this).scrollTop();
    $('.anime').each(function(){
        if (windowTop > $(this).offset().top -400){
            $(this).addClass('anime-init');
        } else {
            $(this).removeClass('anime-init');
        }
    });

});