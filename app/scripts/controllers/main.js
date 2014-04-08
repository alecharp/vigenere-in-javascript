'use strict';

angular.module('vigenereJavascriptApp')
  .controller('MainCtrl', ['$scope', '$vigenere', function ($scope, $vigenere) {
    $scope.encrypt = function(text, key) {
      if (!text || !key) {
        return;
      }
      $scope.output = $vigenere.encrypt(key, text);
    };
    $scope.decrypt = function(text, key) {
      if (!text || !key) {
        return;
      }
      $scope.output = $vigenere.decrypt(key, text);
    };
  }]);
