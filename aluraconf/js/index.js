function ativaScroll(selector) {
    $(selector).click(function(event){
        event.preventDefault();

        var target = $('this').attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        
        }, 2000)
    })
}


ativaScroll('a[href*=#menu-sobre]');
ativaScroll('a[href*=#menu-palestrantes]');
ativaScroll('a[href*=#botao-inscreva]');