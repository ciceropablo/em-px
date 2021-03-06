'use strict';

var Promise = require('pinkie-promise');
var stripUnits = require('strip-units');

module.exports = function(em, base, format) {
  return new Promise(function(resolve, reject) {
    em = stripUnits(em);

    if (typeof em !== 'number') {
      reject(new TypeError('`em` should be a number'));
    }

    if (typeof base === 'boolean') {
      format = base;
      base = null;
    }

    base = base || 16;
    base = stripUnits(base);
    format = format || false;

    if (typeof base !== 'number' || base < 0) {
      reject(new TypeError('`base` should be a number greater than zero'));
    }

    var px = Math[(em < 0) ? 'ceil' : 'floor'](em * base);
    resolve(format ? px + 'px' : px);
  });
};
