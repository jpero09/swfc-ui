(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('cardsController', cardsController);

  /* @ngInject */
  function cardsController($scope, Cards) {
    $scope.isLoading = true;
    $scope.filter = {rarity: {}, range: {}, affinity: {}};

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
      type = (type) ? type.toLowerCase() : undefined;
      switch(type){
        case 'empire': output = 'fa-empire'; break;
        case 'rebel': output = 'fa-ra'; break;
        default:
          // console.log('Unknown type:', type);
          break;
      }

      return output;
    };

    $scope.explorerFilter = function(item) {
      var f = $scope.filter;

      if(!item) { return false; }

      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      if(f.skill && !item.skill_id) { return false; }

      if(f.support && !item.support_id) { return false; }

      if(f.junkyard && !item.is_junkyard_exclusive) { return false; }
      // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

      if(f.name) {
        var searchable = (item.name + item.nickname).toLowerCase();
        if(searchable.indexOf(f.name.toLowerCase()) < 0) {

          return false;
        }
      }

      // Alignment
      if(f.affinity.l || f.affinity.d || f.affinity.n) {
        var side = item.side.toLowerCase();

        if(side === 'l' && !f.affinity.l) { return false; }

        if(side === 'd' && !f.affinity.d) { return false; }

        if(side === 'n' && !f.affinity.n) { return false; }
      }

      // Range
      if(f.range.s || f.range.m || f.range.l) {
        var range = item.range.toLowerCase();

        if(range === 's' && !f.range.s) { return false; }

        if(range === 'm' && !f.range.m) { return false; }

        if(range === 'l' && !f.range.l) { return false; }
      }

      return true;
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
