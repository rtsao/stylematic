'use strict';

var epistyle = require('epistyle/passthrough');
var styletron = require('styletron');

module.exports = stylematic;

function stylematic(styles) {
  var scoped = epistyle(styles);

  if (scoped.css) {
    styletron.injectOnce(scoped.className, scoped.css);
  }

  return {
    passthrough: scoped.passthrough,
    className: scoped.css && scoped.className,
    css: scoped.css
  };
}
