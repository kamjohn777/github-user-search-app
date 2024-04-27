


$(document).ready(function() {
    $('.light-theme-button').click(function() {
      $('.body-wrap').removeClass('dark-theme');
      console.log('Light theme activated');
    //   $('.light-theme-button').css('display', 'none');
    });
  
    $('.dark-theme-button').click(function() {
      $('.body-wrap').addClass('dark-theme');
      console.log('Dark theme activated');
      $('.ui.segment').addClass('dark-theme');
      $('.ui.header').addClass('dark-theme');
      $(' .ui.search').addClass('dark-theme');
    });
  });