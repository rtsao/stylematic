'use strict';

var epistyle = require('epistyle/passthrough');
var prefix = require('inline-style-prefix-all/dist/prefixAll');
var styletron = require('styletron');

module.exports = stylematic;

function stylematic(styles) {
  var prefixed = prefix(styles);
  var scoped = epistyle(prefixed);

  if (scoped.css) {
    styletron.injectOnce(scoped.className, scoped.css);
  }

  return {
    passthrough: scoped.passthrough,
    className: scoped.css && scoped.className,
    css: scoped.css
  };
}
