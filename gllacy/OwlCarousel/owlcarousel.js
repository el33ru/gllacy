$(function() {
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1.5
            },
            500:{
                items:2.5
            },
            800:{
                items:3.5
            },
            1100:{
                items:4
            },
            1200:{
                items:4
            },
        }
    });
});

