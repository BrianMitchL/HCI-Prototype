'use strict';

angular.module('hciPrototypeApp')
  .controller('DecksCtrl', function ($scope, $http, $filter, ngTableParams) {
    var data = [];

    $http.get('/api/decks').success(function(deckList) {
      data = deckList;
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
      console.log(status + ": " + data);
    });

    $scope.deleteDeck = function(deck) {
      $http.delete('/api/decks/' + deck._id).success(function(){
        getDecks();
      });
    };

    function getDecks() {
      $http.get('/api/decks').success(function(deckList) {
        data = deckList;
        $scope.deckParams.reload();
      }).error(function(data, status) {
        console.log(status + ": " + data);
      });
    }

    $scope.reloadDecks = function() {
      getDecks();
    };
  });
