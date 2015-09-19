(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('partsController', partsController)
    .controller('partsOverviewController', partsOverviewController);

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

  /* @ngInject */
  function partsOverviewController($scope, $stateParams, Parts) {
    $scope.isLoading = true;
    $scope.vehicles = null;

    $scope.init = function() {
      Parts.Get({id: $stateParams.id},
        function(data) {
          $scope.isLoading = false;
          $scope.part = data;
        },
        function(error) {
          $scope.error = error;
          $scope.isLoading = false;
        }
      );

      // TODO: Make this async
      Parts.GetVehicles({id: $stateParams.id},
        function(vehiclesData) {
          $scope.vehicles = vehiclesData;
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
