module.exports = (grunt) ->
  # load all the grunt plugins
  require('load-grunt-tasks') grunt

  # load all the grunt tasks defined in the grunt folder
  tasks = require('load-grunt-configs')(grunt,
    config:
      src: [
        'grunt/*.coffee'
        'grunt/*.js'
      ]
    pkg: grunt.file.readJSON('package.json')
    now: new Date().getTime()
  )

  # configure grunt passing our custom tasks
  grunt.initConfig tasks

  # build just the javascript files exporting them in the dist folder
  grunt.registerTask 'build', [
    'jshint'
    'requirejs'
  ]

  # build and test the output
  grunt.registerTask 'test', [
    'build'
    'mocha'
    'connect'
    'saucelabs-mocha'
  ]

  # update the project gh-pages
  grunt.registerTask 'pages', [
    'default'
    'copy'
    'compass'
    'gh-pages'
    'clean:gh-pages'
  ]

  # Default task. to make a new release
  grunt.registerTask 'default', [
    'clean:build'
    'build'
    'mocha'
    'jsdoc'
    'markdown'
  ]

  return