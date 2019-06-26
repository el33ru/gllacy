$(function() {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 500,
        from: 50,
        to: 400,
        grid: false,
        onChange: function (data) {
            $('.js-filter-price').text(data.from + ' руб. –  ' + data.to + ' руб.')
        },
        onStart: function (data) {
            $('.js-filter-price').text(data.from + ' руб. –  ' + data.to + ' руб.')
        }
    });
});