fs = require('fs')
amdclean = require('amdclean');
module.exports = (grunt, options) =>
  # Get the script intro and outro strings
  startFrag = fs.readFileSync('src/frag/start.frag','utf8').replace(/@SCRIPT/g, options.pkg.name)
  endFrag = fs.readFileSync('src/frag/end.frag','utf8')

  build:
    options:
      baseUrl: 'src'
      out: 'dist/' + options.pkg.name + '.js'
      name: 'main'
      optimize: 'none' #uglify2'
      #skipModuleInsertion: true
      wrap: false
      preserveLicenseComments: false
      findNestedDependencies:true
      onBuildWrite: (moduleName, path, contents) =>
        contents
        .replace(/@VERSION/g, options.pkg.version)
      onModuleBundleComplete: (data) ->
        outputFile = data.path
        fs.writeFileSync outputFile, amdclean.clean(
          code: fs.readFileSync(outputFile)
          transformAMDChecks: false
          wrap:
            start: startFrag
            end: endFrag
        )