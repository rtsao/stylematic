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

test('passthrough styles', function(t) {
  var result = stylematic({width: 'calc(50%)'});
  t.deepEqual(result.passthrough, {});
  t.equal(result.css, '._style_2LqhMD {\n  width: -webkit-calc(50%) !important;\n  width: -moz-calc(50%) !important;\n  width: calc(50%) !important\n}');
  t.equal(result.className, '_style_2LqhMD');
  t.end();
});

test('prefix fallback test', function(t) {
  styletron.startBuffering();
  var result = stylematic({width: ['calc(50%)', '90%']});
  var expectedCss = '._style_3H0rMf {\n  width: -webkit-calc(50%) !important;\n  width: -moz-calc(50%) !important;\n  width: calc(50%) !important;\n  width: 90% !important\n}';
  t.equal(result.css, expectedCss);
  t.equal(styletron.flushBuffer(), expectedCss);
  t.equal(result.className, '_style_3H0rMf');
  t.end();
});

