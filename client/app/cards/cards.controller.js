'use strict';

angular.module('hciPrototypeApp')
  .controller('CardsCtrl', function ($scope, $http, $filter, ngTableParams) {
    var data = [];
    getCards();

    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      sorting: {
        name: 'asc'     // initial sorting (ascending by name)
      }
    }, {
      total: data.length, // length of data
      getData: function($defer, params) {
        // use build-in angular filter
        var orderedData = params.sorting() ?
          $filter('orderBy')(data, params.orderBy()) :
          data;

        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });

    $scope.deleteCard = function(card) {
      $http.delete('/api/cards/' + card._id).success(function(){
        getCards();
      });
    };

    $scope.updateCard = function(card) {
      $http.put('/api/cards/' + card._id, card).success(function(){
        getCards();
      });
    };

    function getCards() {
      $http.get('/api/cards').success(function(cardList) {
        data = cardList;
        $scope.tableParams.reload();
      });
    }

    $scope.reloadCards = function() {
      getCards();
    }
  });
