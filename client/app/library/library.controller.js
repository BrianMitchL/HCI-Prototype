'use strict';

angular.module('hciPrototypeApp')
  .controller('LibraryCtrl', function ($scope, $http, $filter, ngTableParams) {
    var data = [];

    $http.get('/api/cards').success(function(cardList) {
      data = cardList;
      $scope.libraryParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        //Can set initial filter, but drastically slows the rendering of the table
        //filter: {
        //  name: ''       // initial filter
        //},
        sorting: {
          name: 'asc'     // initial sorting (ascending)
        }
      }, {
        total: data.length, // length of data
        getData: function($defer, params) {
          // use build-in angular filter
          var filteredData = params.filter() ? $filter('filter')(data, params.filter()) : data;
          var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data; //ordered array of objects based on filter

          params.total(orderedData.length); // set total for recalc pagination
          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });
    }).error(function(data, status) {
      console.log(status + ": " + data);
    });

    $scope.deleteCard = function(card) {
      $http.delete('/api/cards/' + card._id).success(function(){
        getCards();
      }).error(function(data, status) {
        console.log(status + ": " + data);
      });
    };

    $scope.updateCard = function(card) {
      $http.put('/api/cards/' + card._id, card).success(function(){
        getCards();
      }).error(function(data, status) {
        console.log(status + ": " + data);
      });
    };

    $scope.removeFromDeck = function(card) {
      card.deck = '';
      $http.put('/api/cards/' + card._id, card).success(function(){
        getCards();
      }).error(function(data, status) {
        console.log(status + ": " + data);
      });
    };

    function getCards() {
      $http.get('/api/cards').success(function(cardList) {
        data = cardList;
        $scope.libraryParams.reload();
      }).error(function(data, status) {
        console.log(status + ": " + data);
      });
    }

    $scope.reloadCards = function() {
      getCards();
    };
  });
