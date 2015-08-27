(function() {
  'use strict';
  var defaultTimeout = 5000;

  angular
    .module('app.factories')
    .factory('Cards', cardFactory)
    .factory('Vehicles', vehiclesFactory);

  /* @ngInject */
  function cardFactory($resource) {
    return $resource('./api/cards/:id', {}, {
      Get: {method: 'GET', timeout: defaultTimeout},
      GetAll: {method: 'GET', timeout: defaultTimeout, isArray: true},
      Save: {method: 'POST', timeout: defaultTimeout},
      Delete: {method: 'DELETE', timeout: defaultTimeout}
    });
  }

  /* @ngInject */
  function vehiclesFactory($resource) {
    return $resource('./api/vehicles/:id', {}, {
      Get: {method: 'GET', timeout: defaultTimeout},
      GetAll: {method: 'GET', timeout: defaultTimeout, isArray: true},
      Save: {method: 'POST', timeout: defaultTimeout},
      Delete: {method: 'DELETE', timeout: defaultTimeout}
    });
  }

})();
