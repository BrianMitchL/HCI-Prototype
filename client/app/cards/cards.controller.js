'use strict';

angular.module('hciPrototypeApp')
  .controller('CardsCtrl', function ($scope, $http, $filter, ngTableParams) {
    var data = [];

    $http.get('/api/allcards').success(function(cardList) {
      data = cardList;
      $scope.cardParams = new ngTableParams({
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

    $scope.addToLibrary = function(card) {
      var id = card._id;
      delete card._id;
      $http.post('/api/cards', card).success(function () {
        console.log('Added to library: ' + card);
        card._id = id;
      }).error(function(data, status) {
        console.log('Failed to add to library: ' + status + ": " + data);
        console.log(card);
      });
    };

    $scope.deleteCard = function(card) {
      $http.delete('/api/allcards/' + card._id).success(function(){
        console.log('Deleted from cards: ' + card);
        getCards();
      }).error(function(data, status) {
        console.log(status + ": " + data);
      });
    };

    function getCards() {
      $http.get('/api/allcards').success(function(cardList) {
        data = cardList;
        $scope.cardParams.reload();
      }).error(function(data, status) {
        console.log(status + ": " + data);
      });
    }

    $scope.reloadCards = function() {
      getCards();
    };
  });
