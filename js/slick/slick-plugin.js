$('.slides').slick({
  slidesToShow: 3,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,

  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        centerMode: false,
      },
    },

    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
});
