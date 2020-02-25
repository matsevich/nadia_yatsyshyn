$(document).ready(function () {
  $(`.slider`).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: false,
    responsive: [{
      breakpoint: 796,
      settings: {
          slidesToShow: 1,
          dots: false
      }
  }
]
  });
  $('.left-arr').click(function() {
    $('.slider').slick('slickPrev');
})

$('.right-arr').click(function() {
    $('.slider').slick('slickNext');
})

})
