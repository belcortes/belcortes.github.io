function contactForm(){

}

$(function() {
  // var diag_contact = $('<div title="Email me at:" id="contact-info"></div>');
  
  // diag_contact.dialog({
  //     autoOpen: false,
  //     modal: true,
  //     show: "fadeIn",
  //     width: '30%',

  // });
  
  $('#box7').click(function() {
    $('#main-page').fadeOut(1000, function(){$('#contact').fadeIn();});
      // $('#contact-info').text("belcortes@gmail.com");
      // diag_contact.dialog("open");
      // $('body').css('background-color', '#3b3b3b')
  });
  $('.ui-button').on('click', function(){
    $('body').css('background-color', 'white')
  })

  $('#box2').on('click', function(){
    $('#main-page').fadeOut(1000, function(){$('#cv-info').fadeIn();});
  });
  $('#cv-info, #x').on('click', function(){
    $('#cv-info').fadeOut(1000, function(){$('#main-page').fadeIn();});
  });

  $('#box4').on('click', function(){
    $('#main-page').fadeOut(1000, function(){$('#about-info').fadeIn();});
  });
  $('#box5').on('click', function(){
    $('#main-page').fadeOut(1000, function(){$('#projects-info').fadeIn();})
  });

});


// $('#icons').fadeOut(1000, function(){$('#container').fadeIn();})
