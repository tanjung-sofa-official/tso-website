$(function(){
  $('#year').text(new Date().getFullYear());

  const $menu = $('.main-nav');
  const $toggle = $('.menu-toggle');
  $toggle.on('click', function(){
    const isOpen = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', String(!isOpen)).attr('aria-label', isOpen ? 'Buka menu' : 'Tutup menu');
    $menu.toggleClass('is-open', !isOpen);
  });
  $menu.find('a').on('click', function(){
    $menu.removeClass('is-open');
    $toggle.attr('aria-expanded', 'false').attr('aria-label', 'Buka menu');
  });

  let language = 'id';
  $('.lang-switch').on('click', function(){
    language = language === 'id' ? 'en' : 'id';
    $('[data-id][data-en]').each(function(){
      const value = $(this).attr(`data-${language}`);
      if (value) $(this).html(value);
    });
    $('html').attr('lang', language);
    $('.lang-label').text(language.toUpperCase());
    $('.flag').text(language === 'id' ? '🇮🇩' : '🇬🇧');
    $(this).attr('aria-label', language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia');
  });

  const gallery = document.getElementById('lightgallery');
  if (gallery && window.lightGallery) {
    lightGallery(gallery, {selector: '.gallery-item', plugins: [lgThumbnail, lgZoom], speed: 350, download: false, thumbnail: true});
  }
});
