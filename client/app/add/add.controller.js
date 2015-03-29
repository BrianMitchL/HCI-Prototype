'use strict';

angular.module('hciPrototypeApp')
  .controller('AddCtrl', function ($scope, $http) {
    $scope.card = {};
    $scope.card.color = [];

    $scope.toggleSelection = function toggleSelection(color) {
      if ($scope.card.color.indexOf(color) === -1) {
        $scope.card.color.push(color);
      } else {
        $scope.card.color.splice($scope.card.color.indexOf(color), 1);
      }
    };

    $scope.set_color = function (color) {
      if (color == "red") {
        return {color: "#F9A084"}
      } else if (color == "green") {
        return {color: "#90CDA4"}
      } else if (color == "black") {
        return {color: "#C6BBB9"}
      } else if (color == "blue") {
        return {color: "#A1DCF9"}
      } else if (color == "white") {
        return {color: "#FFFCD1"}
      } else {
        return {color: "#FF00F9"}
      }
    };

    $scope.addCard = function() {
      if($scope.card.color.length == 0) {
        $scope.card.color.push("white");
      }
      $http.post('/api/cards', $scope.card).success(function(){
        $scope.reset();
      });
    };

    $scope.reset = function() {
      $scope.card = {};
      $scope.card.color = [];
    };
  });
