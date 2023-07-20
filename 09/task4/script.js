$(document).ready(function() {
  var checkboxes = $('input[type="checkbox"]');
  checkboxes.change(function() {
    var checkedCount = checkboxes.filter(':checked').length;
    if (checkedCount >= 3) {
      checkboxes.not(':checked').prop('disabled', true);
    } else {
      checkboxes.prop('disabled', false);
    }
  });
});
