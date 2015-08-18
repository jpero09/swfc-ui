(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('vehiclesController', vehiclesController);

  function vehiclesController($scope) {
    $scope.message = 'Here is where the vehicles will be!';
    initNavLinks();
  }

  function initNavLinks() {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
  }
})();
