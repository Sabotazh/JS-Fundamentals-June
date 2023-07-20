$(document).ready(function() {
  $('h3').each(function() {
    let h3 = $(this);
    let div = h3.next('div');
    if (div.length) {
      h3.before(div);
    }
  });
});
