$(function () {
    $('a[href*=\\#]').on('click', function (event) {
        event.preventDefault();

        if (!$(this.hash).length) return false;

        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - $('header.main').height()
        }, 500);
    });
    $(".shuffle:not(.active)").click(function (event) {
        event.preventDefault();
        $('.skill-item:not(.transform-active)').addClass('transform-active');
        $(this).addClass('active').text('Dammit! Now help me return my skills, please.')
    });
    $("#about").on("click", ".transform-active>svg", function () {
        $(this).closest('.skill-item').removeClass('transform-active');
        if (!$('.skill-item.transform-active').length) {
            $(".shuffle").removeClass('active').html('Thanks! <span>Do not </span>press this again!')
        }
    });
});
