'use strict';

var epistyle = require('epistyle/passthrough');
var prefix = require('inline-style-prefixer/static');
var styletron = require('styletron-legacy');
var reverseArrays = require('./reverse');

module.exports = stylematic;

function stylematic(styles) {
  var prefixed = reverseArrays(prefix(reverseArrays(styles)));
  var scoped = epistyle(prefixed);

  if (scoped.css) {
    styletron.injectOnce(scoped.css, scoped.className);
  }

  return {
    passthrough: scoped.passthrough,
    className: scoped.css && scoped.className,
    css: scoped.css
  };
}


