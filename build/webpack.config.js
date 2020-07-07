'use strict';

const Webpack = require( 'webpack' ),
   { CleanWebpackPlugin } = require( 'clean-webpack-plugin' ),
   path = require( 'path' ),
   DIST = path.resolve( `${ __dirname }/../dist` ),
   NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = {

   mode: NODE_ENV,
   optimization: {

      nodeEnv: false,
   },
   entry: {

      index: './index.js',
   },
   output: {

      path: DIST,
      filename: '[name].js',
      library: 'moduleError',
      libraryExport: '',
      libraryTarget: 'umd',
      globalObject: 'this',
   },
   plugins: [

      new CleanWebpackPlugin(),
      new Webpack.ProgressPlugin(),
   ],
};
