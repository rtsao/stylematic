# stylematic

[![build status][build-badge]][build-href]
[![dependencies status][deps-badge]][deps-href]
[![npm version][npm-badge]][npm-href]

A comprehensive solution for inline styles

#### Features
* Automatic vendor prefixing <sup>1</sup>
* Support for value fallbacks <sup>2</sup>
* Support for pseudo selectors and media queries <sup>2</sup>
* Automatic generation of scoped CSS, hashed class names <sup>2</sup>
* Automatic injection of scoped CSS into document `<head>` with buffering and caching <sup>3</sup>
* Support for extraction of CSS on server for server-rendering <sup>4</sup>
* Lightweight, only [~5KB bundled, minified, and gzipped](https://wzrd.in/standalone/stylematic@latest)

<hr>

[1]: powered by [inline-style-prefix-all](https://github.com/rofrischmann/inline-style-prefix-all)

[2]: powered by [epistyle](https://github.com/rtsao/epistyle)

[3]: powered by [styletron](https://github.com/rtsao/styletron)

[4]: powered by [styletron-server](https://github.com/rtsao/styletron-server)

[build-badge]: https://travis-ci.org/rtsao/stylematic.svg?branch=master
[build-href]: https://travis-ci.org/rtsao/stylematic
[deps-badge]: https://david-dm.org/rtsao/stylematic.svg
[deps-href]: https://david-dm.org/rtsao/stylematic
[npm-badge]: https://badge.fury.io/js/stylematic.svg
[npm-href]: https://www.npmjs.com/package/stylematic
