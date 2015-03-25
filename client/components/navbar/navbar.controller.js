'use strict';

angular.module('hciPrototypeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Cards',
      'link': '/cards'
    }, {
      'title': 'Add Cards',
      'link': '/add'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
