'use strict';

angular.module('hciPrototypeApp')
  .controller('DecksCtrl', function ($scope, $http, $filter, ngTableParams) {
    var allCards = [];
    var data = [];

    $http.get('/api/cards').success(function(cardList) {
      data = cardList;
      allCards = cardList;
      $scope.deckParams = new ngTableParams({
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
      console.log(status + ': ' + data);
    });

    $scope.removeFromDeck = function(card) {
      card.deck = '';
      $http.put('/api/cards/' + card._id, card).success(function(){
        getCards();
      });
    };

    $scope.filterDecks = function() {
      data = $filter('filter')(allCards, $scope.deckName);
      $scope.deckParams.reload();
    };

    function getCards() {
      $http.get('/api/cards').success(function(cardList) {
        allCards = cardList;
        data = cardList;
        $scope.deckParams.reload();
      }).error(function(data, status) {
        console.log(status + ': ' + data);
      });
    }

    $scope.reloadCards = function() {
      getCards();
    };
  });
