'use strict';

angular.module('vigenereJavascriptApp', ['ng.vigenere', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/index',  {templateUrl: 'views/main.html'})
      .otherwise({redirectTo: '/index'});
  }]);
