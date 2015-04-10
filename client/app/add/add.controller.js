'use strict';

angular.module('hciPrototypeApp')
  .controller('AddCtrl', function ($scope, $http) {
    $scope.card = {};
    $scope.submitted = false;

    $scope.addCard = function(isValid) {
      if (isValid) {
        $http.post('/api/allcards', $scope.card).success(function () {
          $scope.reset();
          $scope.submitted = true;
        }).error(function(data, status) {
          console.log(status + ': ' + data);
        });
      }
    };

    $scope.reset = function() {
      $scope.card = {};
      $scope.addCardForm.$setPristine();
    };
  });
