const level = $("input:radio[name=level]:checked").val();

if (level === 'ok') {
  $('#javaScript').show();
} else if (level === 'good') {
  $('#learnThis, #c').show();
} else {
  $('#python').show();
}