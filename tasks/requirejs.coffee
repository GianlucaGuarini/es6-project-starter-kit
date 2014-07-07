# nodejs modules
fs = require('fs')
amdclean = require('amdclean');
to5 = require("6to5")

module.exports = (grunt, options) =>

  # the main file without .js
  mainFile = 'main';
  # Get the script intro and outro strings
  startFrag = fs.readFileSync('src/frag/start.frag','utf8').replace(/@SCRIPT/g, options.pkg.name)
  to5Runtime = to5.runtime("polyfill")
  endFrag = fs.readFileSync('src/frag/end.frag','utf8').replace(/@SCRIPT/g, options.pkg.name)

  # common build options
  # they will be exrended below
  requirejsOptions =
    baseUrl: 'dist/amd'
    name: mainFile
    useStrict: true
    wrap: false
    preserveLicenseComments: true
    findNestedDependencies: true
    onModuleBundleComplete: (data) ->
      outputFile = data.path
      # use the amdclean to remove all the require functions
      # check the options https://github.com/gfranko/amdclean
      fs.writeFileSync outputFile, amdclean.clean(
        code: fs.readFileSync(outputFile)
        # wrap the output in a UMD (Universal Module Definition) pattern
        wrap:
          start: startFrag + to5Runtime
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