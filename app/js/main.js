$(function () {

    $('.about__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.vacancies__inner').slick({
        dots: false,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button class="slick-arrow slick-prew"><img src="../images/icons/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="../images/icons/arrow-right.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                }
            },
        ]
    });


});