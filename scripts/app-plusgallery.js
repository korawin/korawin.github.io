(function(window){

  'use strict';

  if (!window.Korawin) {
    window.Korawin = {};
  }

  var Korawin = window.Korawin;

  Korawin.App = window.Korawin.App || {};

  Korawin.App.PlusGallery = {
    Setup: function(){
      $('#plusgallery').plusGallery();
    }
  };

})(window);