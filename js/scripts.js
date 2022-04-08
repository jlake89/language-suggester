$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let question3 = parseInt($("input:radio[name=question3]:checked").val());
    let question5 = parseInt($("input:radio[name=question5]:checked").val());
    if (question3 + question5 === 2) {
      $("#cSharp").show();
      $("#javaScript").hide();
      $("#python").hide();
    } else if (question3 + question5 === 3) {
      $("#cSharp").hide();
      $("#javaScript").show();
      $("#python").hide();
    } else if (question3 + question5 === 4) {
      $("#cSharp").hide();
      $("#javaScript").hide();
      $("#python").show();
    } event.preventDefault();
  });
});