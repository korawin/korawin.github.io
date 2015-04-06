(function (window) {

  'use strict';

  if (!window.Korawin) {
    window.Korawin = {};
  }

  var Korawin = window.Korawin;

  Korawin.App = window.Korawin.App || {};

  Korawin.App.Mail = {
    Setup: function () {
      $('#mailAlert').hide();
      $('#contactUsForm').submit(function( event ) {
        var name = $(this).find('#name').val()
        var email = $(this).find('#email').val()
        var description = $(this).find('#description').val()

        $.ajax({
          type: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': 'o2Mp1XbRdIYKNViaeaRxSg',
            'message': {
              'from_email': 'korawin.farm@email.com',
              'to': [
                {
                  'email': 'tawin.sup@gmail.com',
                  'name': 'Tawin',
                  'type': 'to'
                }
              ],
              'autotext': 'true',
              'subject': 'Contact from korawin',
              'html': 'name:'+ name + ' email:'+ email +' description:'+ description
            }
          }
        }).done(function(response) {
          $('#mailAlert').show();
        });


        event.preventDefault();
      });
    }
  }
})(window);
