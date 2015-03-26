'use strict';

angular.module('hciPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('decks', {
        url: '/decks',
        templateUrl: 'app/decks/decks.html',
        controller: 'DecksCtrl'
      });
  });