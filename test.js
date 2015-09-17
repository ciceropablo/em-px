'use strict';

var test = require('tape');
var emPx = require('./');

test('em-px', function(t) {
  emPx()
    .then(function() {
      t.fail('should not be called');
    })
    .catch(function(err) {
      t.equal(err.message, '`em` should be a number', '');
    });

  emPx(1)
    .then(function(px) {
      t.equal(px, 16, '`px` should be equal 16');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx(1, true)
    .then(function(px) {
      t.equal(px, '16px', '`px` should be equal 16px');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx(1, 0)
    .then(function(px) {
      t.equal(px, 16, '`px` should be equal 16');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx(0.667, 24)
    .then(function(px) {
      t.equal(px, 16, '`px` should be equal 16');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx(0.66, 24)
    .then(function(px) {
      t.equal(px, 15, '`px` should be equal 15');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx(0.6, 24)
    .then(function(px) {
      t.equal(px, 14, '`px` should be equal 14');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx(0.667, 24, true)
    .then(function(px) {
      t.equal(px, '16px', '`px` should be equal 16px');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx(1, -1)
    .then(function() {
      t.fail('should not be called');
    })
    .catch(function(err) {
      t.equal(err.message, '`base` should be a number greater than zero', '');
    });

  emPx(-0.667, 24)
    .then(function(px) {
      t.equal(px, -16, '`px` should be equal -16');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx(-0.66, 24)
    .then(function(px) {
      t.equal(px, -15, '`px` should be equal -15');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx(-0.6, 24)
    .then(function(px) {
      t.equal(px, -14, '`px` should be equal -14');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx('0.667em', '24px')
    .then(function(px) {
      t.equal(px, 16, '`px` should be equal 16');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx('-0.667em', '24px', true)
    .then(function(px) {
      t.equal(px, '-16px', '`px` should be equal -16px');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx('-0.667em', 24, true)
    .then(function(px) {
      t.equal(px, '-16px', '`px` should be equal -16px');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx(0.667, '24px', true)
    .then(function(px) {
      t.equal(px, '16px', '`px` should be equal 16px');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  emPx('ten', 24, true)
    .then(function() {
      t.fail('should not be called');
    })
    .catch(function(err) {
      t.equal(err.message, '`em` should be a number', '');
    });

  emPx('0.667em', '0.667em')
    .then(function(px) {
      t.equal(px, 0, '`px` should be equal 0');
    })
    .catch(function() {
      t.fail('should not be called');
    });
  t.end();
});
