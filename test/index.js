'use strict';

var test = require('tape');
var stylematic = require('../');

test('passthrough styles', function(t) {
  var result = stylematic({color: 'red'});
  t.deepEqual(result.passthrough, {color: 'red'});
  t.equal(result.css, '');
  t.equal(result.className, '');
  t.end();
});
