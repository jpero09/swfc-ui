(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('cardsController', cardsController);

  /* @ngInject */
  function cardsController($scope) {
    $scope.isLoading = true;

    $scope.init = function() {
      $scope.isLoading = false;

      /*
      Cards.GetAll({},
        function(data) {
          $scope.message = data;
        },
        function(error) {
          $scope.message = error;
        }
      );
      */
      initNavLinks();
    };

    $scope.init();
  }

  function initNavLinks() {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
  }
})();
