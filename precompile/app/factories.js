(function() {
  'use strict';
  angular
    .module('app.factories')
    .factory('Cards', cardFactory);

  /* @ngInject */
  function cardFactory($resource) {
    return $resource('./api/cards/:id', {}, {
      Get: {method: 'GET', timeout: 5000},
      GetAll: {method: 'GET', timeout: 5000, isArray: true},
      Save: {method: 'POST', timeout: 5000},
      Delete: {method: 'DELETE', timeout: 5000}
    });
  }

})();
