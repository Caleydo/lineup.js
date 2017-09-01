var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var pkg = require('./package.json');

var year = (new Date()).getFullYear();
var banner = '/*! ' + ( pkg.title || pkg.name) + ' - v' + pkg.version + ' - ' + year + '\n' +
  '* ' + pkg.homepage + '\n' +
  '* Copyright (c) ' + year + ' ' + pkg.author.name + ';' +
  ' Licensed ' + pkg.license + '*/\n';

function generate(bundle, min) {
  var base = {
    entry: {
      'LineUpJS': './src/index.ts',
      'LineUpJS_react': './src/react/index.tsx'
    },
    output: {
      path: path.resolve('./build'),
      filename: '[name]' + (bundle ? '_bundle' : '') + (min ? '.min' : '') + '.js',
      library: 'LineUpJS',
      libraryTarget: 'umd',
      umdNamedDefine: false //anonymous require module
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
      alias: {
        d3: 'd3/d3'
      }
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: banner,
        raw: true
      })
      //rest depends on type
    ],
    externals: { //react always external
      react: { amd: 'react', root: 'React', commonjs: 'react', commonjs2: 'react' },
      'react-dom': { amd: 'react-dom', root: 'ReactDOM', commonjs: 'react-dom', commonjs2: 'react-dom' }
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader',
          query: {
            limit: 10000, //inline <= 10kb
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    }
  };
  if (!bundle) {
    //don't bundle d3
    base.externals.d3 = 'd3';

    //extract the included css file to own file
    var p = new ExtractTextPlugin('style' + (min ? '.min' : '') + '.css');
    base.plugins.push(p);
    base.module.loaders[0].loader = p.extract(['css-loader', 'sass-loader']);
  }
  if (min) {
    base.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
  } else {
    //generate source maps
    base.devtool = 'source-map';
  }
  return base;
}

var library = generate(false, false);
var library_min = generate(false, true);

var bundle = generate(true, false);
var bundle_min = generate(true, true);

if (process.argv[2] === '--watch') { //aka called as: webpack --watch
  module.exports = library;
} else {
  module.exports = [library, library_min, bundle, bundle_min];
}
