$(function(){

  'use strict';

  if (!window.Korawin) {
    window.Korawin = {};
  }

  var Korawin = window.Korawin;

  // initialize the application
  Korawin.Init = (function () {
    Korawin.App.PlusGallery.Setup();
  })();


});