'use strict';

angular.module('vigenereJavascriptApp')
  .controller('MainCtrl', ['$scope', '$vigenere', function ($scope, $vigenere) {
    $scope.key = 'MUSIQUE';
    $scope.clearText = 'j\'adore ecouter la radio toute la journee';

    $scope.encrypt = function(text) {
      $scope.encryptedText = $vigenere.encrypt($scope.key, text);
    };
    $scope.decrypt = function(text) {
      $scope.decryptedText = $vigenere.decrypt($scope.key, text);
    };
  }]);
