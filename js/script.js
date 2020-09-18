$(document).ready(function() {
  $('.emailSubmit').click(function(event) {
    event.preventDefault();
    var emailAddress = $('#inputEmail').val().trim();
    console.log(emailAddress);
    $('#inputEmail').val('')
  });
});