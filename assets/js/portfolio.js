
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

$('.contact-form').on('submit', function(e) {
  e.preventDefault();
  var form = this;
  var formData = new FormData(form);

  $.ajax({
    url: form.action,
    method: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function() {
      alert("Message sent successfully!");
      form.reset();
    },
    error: function() {
      alert("Error sending message.");
    }
  });
});
