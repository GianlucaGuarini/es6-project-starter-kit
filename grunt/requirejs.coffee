# nodejs modules
fs = require('fs')
amdclean = require('amdclean');

module.exports = (grunt, options) =>

  # the main file without .js
  mainFile = 'main';
  # Get the script intro and outro strings
  startFrag = fs.readFileSync('src/frag/start.frag','utf8').replace(/@SCRIPT/g, options.pkg.name)
  endFrag = fs.readFileSync('src/frag/end.frag','utf8')
  # wrap all the js files in a define function to enable the commonjs import/export pattern
  # the requirejs optimizer needs the define functions to find and inject the nested dependecies
  commonJsWrapper =
    start: 'define(function(require, exports, module) {'
    end: '});'

  # common build options
  # they will be exrended below
  requirejsOptions =
    baseUrl: 'src'
    name: mainFile
    wrap: false
    preserveLicenseComments: false
    findNestedDependencies: true
    onBuildRead: (moduleName, path, contents) =>
      # replace the version string whenever it's used and
      # wrap all the files in a define function
      commonJsWrapper.start + contents + commonJsWrapper.end
    onModuleBundleComplete: (data) ->
      outputFile = data.path
      # use the amdclean to remove all the require functions
      # check the options https://github.com/gfranko/amdclean
      fs.writeFileSync outputFile, amdclean.clean(
        code: fs.readFileSync(outputFile)
        # wrap the output in a UMD (Universal Module Definition) pattern
        wrap:
          start: startFrag
          end: endFrag
        )
  # expanded release
  expanded:
    options: grunt.util._.extend({
        out: 'dist/' + options.pkg.name + '.js'
        optimize: 'none'
      }, requirejsOptions)
  # minified release
  min:
    options:
      grunt.util._.extend({
        out: 'dist/' + options.pkg.name + '.min.js'
        optimize: 'uglify2'
      }, requirejsOptions)