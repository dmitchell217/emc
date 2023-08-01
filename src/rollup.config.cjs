var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var polyfills = require('rollup-plugin-node-polyfills');

module.exports = {
  input: './js_v0/all.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    globals: {
      'jquery': 'jQuery'
    }
  },
  plugins: [
    resolve({ 
      preferBuiltins: true,
      browser: true
    }),
    commonjs(),
    polyfills()
  ],
  external: ['jquery']
};
