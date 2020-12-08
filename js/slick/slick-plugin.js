$('.slides').slick({
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
