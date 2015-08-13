/*
(function() {
  'use strict';
  angular
    .module('app')
    .controller('mainController', ['$scope', function($scope) {
      $scope.init = function() {
        console.log('Angular master controller has been initialized.');
        $scope.message = 'Everyone come and see how good I look!';
      };

      $scope.init();
    }]);
})();
*/
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/cards', {
      templateUrl: 'pages/home.html',
      controller: 'cardsController'
    })
    .when('/vehicles', {
      templateUrl: 'pages/home.html',
      controller: 'vehiclesController'
    })
    .otherwise({
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    });
});

app.controller('mainController', function($scope) {
  $scope.message = 'Welcome to SWFC-UI!';
  initNavLinks();
});
app.controller('cardsController', function($scope) {
  $scope.message = 'Here be some cards!';
  initNavLinks();
});
app.controller('vehiclesController', function($scope) {
  $scope.message = 'Here be some vehicles!';
  initNavLinks();
});

function initNavLinks() {
  $('.nav a').on('click', function() {
    $('.nav').find('.active').removeClass('active');
    $(this).parent().addClass('active');
  });
}

