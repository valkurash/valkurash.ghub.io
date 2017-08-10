$(function () {

    function animateElement(elem) {
        var parent = elem.closest('.transform-active');

        var h = $(document).height() - elem.height();
        var w = $(document).width() - elem.width();

        var nh = Math.floor(Math.random() * h + $('header.main').height()) - parent.offset().top;
        var nw = Math.floor(Math.random() * w) - parent.offset().left;

        var newq = [nh, nw];

        elem.css({
            top: newq[0],
            left: newq[1]
        });

    };

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
        $('.transform-active svg').each(function () {
            animateElement($(this));
        });
        $(this).addClass('active').text('Dammit! Now help me return my skills, please.')
    });

    $("#about").on("click", ".transform-active>svg", function () {
        $(this).closest('.skill-item').removeClass('transform-active');
        $(this).css({
            top: '',
            left: ''
        });
        if (!$('.skill-item.transform-active').length) {
            $(".shuffle").removeClass('active').html('Thanks! <span>Do not </span>press this again!')
        }
    });
});