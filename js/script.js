$(document).ready(function () {
  $(".slider-header").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".slider-face").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
  });

  $(".images_dotted").slick({
    slidesToShow: 5,
    centerMode: true,
    asNavFor: ".slider-face",
    focusOnSelect: true,
    arrows: true,
    adaptiveHeight: true,
    adaptiveWeight: true,
  });

  $(".header__burger").click(function (event) {
    $(".header__burger,.header__nav").toggleClass("active");
    $(".body").toggleClass("lock");
  });
});
