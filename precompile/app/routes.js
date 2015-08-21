(function() {
  'use strict';

  angular
    .module('app.routes', ['ui.router'])
    .config(registerRoutes);

  /* @ngInject */
  function registerRoutes($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          main: {
            templateUrl: 'home/home',
            controller: 'homeController',
            controllerAs: 'hc'
          }
        }
      })
     .state('cards', {
        url: '/cards',
        views: {
          main: {
            templateUrl: 'cards/cards',
            controller: 'cardsController',
            controllerAs: 'cc'
          }
        }
      })
     .state('parts', {
        url: '/parts',
        views: {
          main: {
            templateUrl: 'parts/parts',
            controller: 'partsController',
            controllerAs: 'pc'
          }
        }
      })
     .state('vehicles', {
        url: '/vehicles',
        views: {
          main: {
            templateUrl: 'vehicles/vehicles',
            controller: 'vehiclesController',
            controllerAs: 'vc'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }
})();
