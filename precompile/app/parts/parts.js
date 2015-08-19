(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('partsController', partsController);

  function partsController($scope) {
    $scope.message = 'Here is where the parts will be!';
    initNavLinks();
  }

  function initNavLinks() {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
  }
})();
