(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('homeController', homeController);

  function homeController($scope) {
    $scope.message = 'Welcome to SWFC-UI!';
    initNavLinks();
  }

  function initNavLinks() {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
  }
})();
