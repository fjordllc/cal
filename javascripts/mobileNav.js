$(document).ready(function () {
  $('.mobile-nav-button').on('click', function() {
    $(this).toggleClass( 'is-mobile-nav-open');
    if ($('body').hasClass('is-mobile-nav-open')) {
      $('.js-mobile-nav-overlay').remove();
    } else {
      $('.header').append('<div class="overlay js-mobile-nav-overlay"></div>');
    };
    $('.mobile-menu').toggleClass('is-mobile-nav-open');
    $('body').toggleClass('is-mobile-nav-open');
    return false;
  });

  $('.header').on('click', '.js-mobile-nav-overlay', function() {
    $('.mobile-nav-button').removeClass( 'is-mobile-nav-open');
    $(this).remove();
    $('.mobile-menu').removeClass('is-mobile-nav-open');
    $('body').removeClass('is-mobile-nav-open');
    return false;
  });

});
