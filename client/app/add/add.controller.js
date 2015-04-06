'use strict';

angular.module('hciPrototypeApp')
  .controller('AddCtrl', function ($scope, $http) {
    $scope.card = {};
    $scope.submitted = false;

    $scope.addCard = function(isValid) {
      if (isValid) {
        $http.post('/api/allcards', $scope.card).success(function () {
          $scope.reset();
        });
        $scope.submitted = true;
      } else {
        alert("Form did not validate");
      }
    };

    $scope.reset = function() {
      $scope.card = {};
    };
  });
