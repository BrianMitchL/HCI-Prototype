'use strict';

angular.module('hciPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cards', {
        url: '/cards',
        templateUrl: 'app/cards/cards.html',
        controller: 'CardsCtrl'
      });
  });
