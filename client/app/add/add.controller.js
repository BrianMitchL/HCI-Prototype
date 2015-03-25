'use strict';

angular.module('hciPrototypeApp')
  .controller('AddCtrl', function ($scope, $http) {
    $scope.card = {};

    $scope.addCard = function() {
      if($scope.cardName === '' || $scope.cardDescription === '' || $scope.cardType === '') {
        return;
      }
      $http.post('/api/cards', $scope.card).success(function(){
        $scope.reset();
      });
    };

    $scope.reset = function() {
      $scope.card = {};
    }
  });
