(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('vehiclesController', vehiclesController)
    .controller('vehiclesOverviewController', vehiclesOverviewController);

  /* @ngInject */
  function vehiclesController($scope, Vehicles) {
    $scope.isLoading = true;

    $scope.init = function() {
      Vehicles.GetAll({},
        function(data) {
          $scope.isLoading = false;
          $scope.vehicles = data;
        },
        function(error) {
          $scope.error = error;
          $scope.isLoading = false;
        }
      );
      initNavLinks();
    };

    $scope.init();
  };

  /* @ngInject */
  function vehiclesOverviewController($scope, $stateParams, Vehicles) {
    $scope.isLoading = true;

    $scope.init = function() {
      Vehicles.Get({id: $stateParams.id},
        function(data) {
          $scope.isLoading = false;
          $scope.vehicle = data;
        },
        function(error) {
          $scope.error = error;
          $scope.isLoading = false;
        }
      );

      // TODO: Make this async
      Vehicles.GetParts({id: $stateParams.id},
        function(partsData) {
          $scope.parts = partsData;
        },
        function(error) {
          $scope.error = error;
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
