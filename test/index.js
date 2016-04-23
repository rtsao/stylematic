'use strict';

var test = require('tape');
var styletron = require('styletron');
var stylematic = require('../');

test('passthrough styles', function(t) {
  var result = stylematic({color: 'red'});
  t.deepEqual(result.passthrough, {color: 'red'});
  t.equal(result.css, '');
  t.equal(result.className, '');
  t.end();
});

test('prefix test', function(t) {
  styletron.startBuffering();
  var result = stylematic({width: 'calc(50%)'});
  var expectedCss = '._style_2LqhMD {\n  width: -webkit-calc(50%) !important;\n  width: -moz-calc(50%) !important;\n  width: calc(50%) !important\n}';
  t.equal(result.css, expectedCss);
  t.equal(styletron.flushBuffer(), expectedCss);
  t.equal(result.className, '_style_2LqhMD');
  t.end();
});
