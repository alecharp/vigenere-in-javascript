'use strict';

angular.module('ng.vigenere', [])
  .factory('$vigenere', [function() {
    var inst = {};
    inst.encrypt = function(key, value) {
      return key + '+' + value;
    };
    inst.decrypt = function(key, value) {
      return key + '-' + value;
    };
    return inst;
  }]);
