/**
* slickに関する記述
*/
$(function() {
    $('.slick-box').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      speed: 600,
      slidesToShow: 1,
      adaptiveHeight: true
    });
});
