/*
 * Copyright 2014 Adrien Lecharpentier
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

angular.module('ng.vigenere', [])
  .factory('$vigenere', [function() {
    var inst = {};
    inst.encrypt = function(key, value) {
      if (!key || !value) {
        return;
      }
      key = key.toUpperCase();
      var encrypted = '';
      var escaped = 0;
      for (var i = 0; i<value.length; i++) {
        var c = value.charAt(i);
        var cCode = c.charCodeAt(0);
        if ((cCode >= 'A'.charCodeAt(0) && cCode <= 'Z'.charCodeAt(0)) ||
            (cCode >= 'a'.charCodeAt(0) && cCode <= 'z'.charCodeAt(0))) {
          var ref;
          if ((cCode >= 'A'.charCodeAt(0) && cCode <= 'Z'.charCodeAt(0))) {
            ref = 'A'.charCodeAt(0);
            key = key.toUpperCase();
          } else if ((cCode >= 'a'.charCodeAt(0) && cCode <= 'z'.charCodeAt(0))) {
            ref = 'a'.charCodeAt(0);
            key = key.toLowerCase();
          }
          var keyCode = key.charCodeAt((i - escaped) % key.length) - ref;
          var code = ((value.charCodeAt(i) - ref) + keyCode) % 26;
          encrypted += String.fromCharCode(ref + code);
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
      key = key.toUpperCase();
      var decrypted = '';
      var escaped = 0;
      for (var i = 0; i<value.length; i++) {
        var c = value.charAt(i);
        var cCode = c.charCodeAt(0);
        if ((cCode >= 'A'.charCodeAt(0) && cCode <= 'Z'.charCodeAt(0)) ||
            (cCode >= 'a'.charCodeAt(0) && cCode <= 'z'.charCodeAt(0))) {
          var ref;
          if ((cCode >= 'A'.charCodeAt(0) && cCode <= 'Z'.charCodeAt(0))) {
            ref = 'A'.charCodeAt(0);
            key = key.toUpperCase();
          } else if ((cCode >= 'a'.charCodeAt(0) && cCode <= 'z'.charCodeAt(0))) {
            ref = 'a'.charCodeAt(0);
            key = key.toLowerCase();
          }
          var keyCode = key.charCodeAt((i - escaped) % key.length) - ref;
          var code = ((value.charCodeAt(i) - ref) - keyCode) % 26;
          if (code < 0) {
            code += 26;
          }
          decrypted += String.fromCharCode(ref + code);
        } else {
          escaped += 1;
          decrypted += c;
        }
      }
      return decrypted;
    };
    return inst;
  }]);
