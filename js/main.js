console.log('Hello World');

// $(document).on('ready', function() {
//     $(".full").slick({
//       arrows: false,
//       dots: true,
//       autoplay: true,
//       autoplaySpeed: 1500,
//       speed: 1500,
//       fade: true,
//       pauseOnFocus: false,
//       pauseOnHover: false,
//       pauseOnDotsHover: false,
//     });
//   });

  $(".full").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });

  $('.to-top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700, 'swing')
})