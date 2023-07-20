$(document).ready(function() {
  $('a').filter(function() {
    var href = $(this).attr('href').trim();
    if (/^https:\/\//.test(href)) {
      $(this).attr('target', '_blank');
    }
  });
});