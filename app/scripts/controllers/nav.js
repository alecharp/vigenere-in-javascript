'use strict';

angular.module('vigenereJavascriptApp')
  .controller('NavCtrl', [
    '$scope', '$location',
    function($scope, $location) {
      $scope.isActive = function(path) {
        return $location.path().indexOf(path) !== -1;
      };
    }
  ]);
