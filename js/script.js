(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);


// Let's talk function

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init('WylPwE3s-WVJngTtY'); // Replace with your actual public key from EmailJS

  var form = document.getElementsByClassName('contact-form')[0]; // Select the first form element

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_portfolio_con'; // Replace with your actual service ID from EmailJS
    const templateID = 'service_portfolio_con'; // Replace with your actual template ID from EmailJS

    emailjs.sendForm(serviceID, templateID, this)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email successfully sent!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Email sending failed.');
      });
  });
});

