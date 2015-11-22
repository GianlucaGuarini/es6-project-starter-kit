var utils = require('./_utils'),
  rollup = require( 'rollup' ),
  mkdirp = require('mkdirp'),
  fs = require('fs'),
  babel = require('babel-core')

module.exports = function(options) {

  // delete the old ./dist folder
  utils.clean('./dist')

  /**
   * Create a promise based on the result of the webpack compiling script
   */

  return new Promise(function(resolve, reject) {

    rollup.rollup({
      // The bundle's starting point. This file will be
      // included, along with the minimum necessary code
      // from its dependencies
      entry: './src/index.js'
    }).then( function ( bundle ) {

      // convert to valid es5 code with babel
      var result = babel.transform(
        // create a single bundle file
        bundle.generate({
          format: 'cjs'
        }).code,
        {
          moduleId: global.library,
          moduleIds: true,
          comments: false,
          presets: ['es2015'],
          plugins: ['transform-es2015-modules-umd']
        }
      ).code

      mkdirp('./dist', function() {
        fs.writeFileSync(`./dist/${ global.library }.js`, result, 'utf8')
        resolve()
      })

    })
  })

}
