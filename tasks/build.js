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
      input: './src/index.js'
    }).then( function ( bundle ) {
      bundle.generate({
        format: 'cjs'
      }).then(({ code }) => {
        // convert to valid es5 code with babel
        const result = babel.transform(
          code,
          {
            moduleId: global.library,
            moduleIds: true,
            comments: false,
            presets: ['env'],
            plugins: ['transform-es2015-modules-umd']
          }
        )
        mkdirp('./dist', function() {
          try {
            fs.writeFileSync(`./dist/${ global.library }.js`, result.code, 'utf8')
            resolve()
          } catch (e) {
            reject(e)
          }
        })
      })
    }).catch(e =>{ utils.print(e, 'error') })
  })

}
