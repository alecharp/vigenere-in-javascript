'use strict';

angular.module('vigenereJavascriptApp', ['ng.vigenere', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/index',  {templateUrl: 'views/main.html'})
      .when('/encode', {templateUrl: 'views/form.html', controller:'MainCtrl'})
      .otherwise({redirectTo: '/index'});
  }]);
