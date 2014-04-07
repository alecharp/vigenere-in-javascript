'use strict';

angular.module('ng.vigenere', [])
  .factory('$vigenere', [function() {
    var inst = {};
    inst.encrypt = function(key, value) {
      if (!key || !value) {
        return;
      }
      value = value.toUpperCase();
      key = key.toUpperCase();
      var encrypted = '';
      var escaped = 0;
      for (var i = 0; i<value.length; i++) {
        var c = value.charAt(i);
        if (c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
          var keyCode = key.charCodeAt((i - escaped) % key.length) - 'A'.charCodeAt(0);
          var code = ((value.charCodeAt(i) - 'A'.charCodeAt(0)) + keyCode) % 26;
          encrypted += String.fromCharCode('A'.charCodeAt(0) + code);
        } else {
          escaped += 1;
          encrypted += c;
        }
      }
      return encrypted;
    };
    inst.decrypt = function(key, value) {
      if (!key || !value) {
        return;
      }
      value = value.toUpperCase();
      key = key.toUpperCase();
      var decrypted = '';
      var escaped = 0;
      for (var i = 0; i<value.length; i++) {
        var c = value.charAt(i);
        if(c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)) {
          var keyCode = key.charCodeAt((i - escaped) % key.length) - 'A'.charCodeAt(0);
          var code = ((value.charCodeAt(i) - 'A'.charCodeAt(0)) - keyCode) % 26;
          if (code < 0) {
            code += 26;
          }
          decrypted += String.fromCharCode('A'.charCodeAt(0) + code);
        } else {
          escaped += 1;
          decrypted += c;
        }
      }
      return decrypted.toLowerCase();
    };
    return inst;
  }]);