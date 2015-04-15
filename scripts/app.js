$(function(){

  'use strict';

  if (!window.Korawin) {
    window.Korawin = {};
  }

  var Korawin = window.Korawin;

  // initialize the application
  Korawin.Init = (function () {
    Korawin.App.Mail.Setup();
    Korawin.App.PlusGallery.Setup();
    Korawin.App.Localization.Setup();
  })();


});