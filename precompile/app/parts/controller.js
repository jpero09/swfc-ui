(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('partsController', partsController);

  /* @ngInject */
  function partsController($scope, Parts) {
    $scope.isLoading = true;

    $scope.init = function() {
      Parts.GetAll({},
        function(data) {
          $scope.isLoading = false;
          $scope.parts = data;
        },
        function(error) {
          $scope.message = 'ERROR? ' + error;
          $scope.isLoading = false;
        }
      );
      initNavLinks();
    };

    $scope.init();
  };

  function initNavLinks() {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
  }
})();
