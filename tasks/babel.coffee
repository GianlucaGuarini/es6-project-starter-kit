babel = require('babel')

module.exports = (grunt) ->
  # Avoiding the use of the plugin grunt plugin to use always the latest babel version
  # register the task https://github.com/babel/grunt-babel
  grunt.registerMultiTask 'babel', 'Transpile ES6 to ES5', ->
    options = @options()
    @files.forEach (el) ->
      options.filename = el.src[0]
      options.filenameRelative = el.src[0].replace('src/','')
      res = babel.transformFileSync(el.src[0], options)
      grunt.file.write el.dest, res.code
      grunt.file.write el.dest + '.map', JSON.stringify(res.map)  if res.map

  options:
    blacklist: ['useStrict']

  # this will be compiled with requirejs
  browser:
    options:
      modules: 'amd'
      loose: 'all'
      externalHelpers: true
    files:[
      expand: true
      cwd: 'src'
      src: '**/**/*.js'
      dest: 'tmp'
    ]
  # node js environments
  node:
    options:
      loose: 'all'
      modules: 'common'
      optional: ['selfContained']
    files:[
      expand: true
      cwd: 'src'
      src: '**/**/*.js'
      dest: 'dist/cmj'
    ]

