(function() {
  'use strict';

  var app = angular.module('app', ['ngRoute']);
  //app.controller('mainController', mainController);

  app.config(function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
      .when('/home', {
        templateUrl: 'html/home.html',
        controller: 'homeController'
      })
      .when('/cards', {
        templateUrl: 'html/home.html',
        controller: 'cardsController'
      })
      .when('/vehicles', {
        templateUrl: 'html/home.html',
        controller: 'vehiclesController'
      })
      .otherwise({
        templateUrl: 'html/home.html',
        controller: 'homeController'
      });
  });

  function mainController($scope) {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
    $scope.message = 'Everyone come and see how good I look!';
  }
  mainController.$inject = ['$scope'];

  function homeController($scope) {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
    $scope.message = 'Everyone come and see our new home!';
  }
  homeController.$inject = ['$scope'];

  function cardsController($scope) {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
    $scope.message = 'Everyone come and see cards!';
  }
  cardsController.$inject = ['$scope'];

  function vehiclesController($scope) {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
    $scope.message = 'Everyone come and see vehicles!';
  }
  vehiclesController.$inject = ['$scope'];

  app.controller('homeController', homeController);
  app.controller('cardsController', cardsController);
  app.controller('vehiclesController', vehiclesController);
})();
