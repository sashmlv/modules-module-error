'use strict';

const Webpack = require( 'webpack' ),
   path = require( 'path' ),
   DIST = path.resolve( `${ __dirname }/../dist` );

module.exports = {

   target: 'node',
   stats: {

      all: false,
      colors: true,
      errors: true,
      errorDetails: true,
      warnings: true,
      builtAt: true,
   },

   mode: 'production',
   entry: {

      index: './index',
   },
   output: {

      path: DIST,
      filename: '[name].js',
      libraryTarget: 'umd',
   },
   plugins: [

      new Webpack.ProgressPlugin(),
   ].filter( v => v )
};
