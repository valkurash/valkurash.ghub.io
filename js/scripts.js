$(function () {
    $('a[href*=\\#]').on('click', function (event) {
        event.preventDefault();
        
        if(!$(this.hash).length) return false;
        
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top-$('header.main').height()
        }, 500);
    });
});