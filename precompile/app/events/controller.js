(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('eventsController', eventsController);

  function eventsController($scope) {
    initNavLinks();
  }

  function initNavLinks() {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
  }
})();
