(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('vehiclesController', vehiclesController);

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
          $scope.message = 'ERROR? ' + error;
          $scope.isLoading = false;
        }
      );
      initNavLinks();
    };

    $scope.getImagePath = function(name) {
      var output = 'unknown';
      var cleanName = (name) ? name.toLowerCase() : null;
      switch(cleanName){
        case 'at-st':
          output = 'atst';
          break;
        case 'b-wing':
          output = 'bWing';
          break;
        case 'x-wing':
          output = 'xWing';
          break;
        case 'aat':
          output = 'armoredAssaultTank';
          break;
        case 't-16 skyhopper':
          output = 't16Skyhopper';
          break;
        case 'tie fighter':
          output = 'tieFighter';
          break;
        case 'tie interceptor':
          output = 'tieInterceptor';
          break;
      }

      return './images/vehicles/' + output + '.png';
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
