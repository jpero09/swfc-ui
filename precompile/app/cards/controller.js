(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('cardsController', cardsController);

  /* @ngInject */
  function cardsController($scope, Cards) {
    $scope.isLoading = true;

    $scope.init = function() {
      Cards.GetAll({},
        function(data) {
          $scope.isLoading = false;
          $scope.cards = data;
        },
        function(error) {
          $scope.message = 'ERROR? ' + error;
          $scope.isLoading = false;
        }
      );
      initNavLinks();
    };

    $scope.getTypeIcon = function(type) {
      var output = 'fa-question-circle';
      type = (type) ? type.toLowerCase(): undefined;
      switch(type){
        case 'empire': output = 'fa-empire'; break;
        case 'rebel': output = 'fa-ra'; break;
        default:
          console.log('Unknown type:', type);
          break;
      }

      return output;
    }

    $scope.init();
    
  }

  function initNavLinks() {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
  }
})();
