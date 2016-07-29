module.exports = function reverseArrays(styles) {
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
