$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let vacation = parseInt($("input:radio[name=vacation]:checked").val());
    let level = parseInt($("input:radio[name=level]:checked").val());
    if (vacation + level <= 2) {
      $(".cSharp").show();
      $(".javaScript").hide();
      $(".python").hide();
    } else if (vacation + level <= 11) {
      $(".cSharp").hide();
      $(".javaScript").show();
      $(".python").hide();
    } else if (vacation + level <= 15) {
      $(".cSharp").hide();
      $(".javaScript").hide();
      $(".python").show();
    } event.preventDefault();
  });
});