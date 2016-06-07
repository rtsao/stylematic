'use strict';

var epistyle = require('epistyle/passthrough');
var prefix = require('@rtsao/inline-style-prefix-all');
var styletron = require('styletron');

module.exports = stylematic;

function stylematic(styles) {
  var prefixed = reverseArrays(prefix(styles));
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

function reverseArrays(styles) {
  Object.keys(styles).forEach(function(key) {
    var val = styles[key];
    if (Array.isArray(val)) {
      styles[key] = val.slice(0).reverse();
    } else if (typeof val === 'object' && val !== null) {
      reverseArrays(val);
    }
  });
  return styles;
}
