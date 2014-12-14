module.exports = (grunt) ->
  # load all the grunt plugins
  require('load-grunt-tasks') grunt

  # load all the grunt tasks defined in the tasks folder
  tasks = require('load-grunt-configs')(grunt,
    config:
      src: [
        'tasks/*.coffee'
        'tasks/*.js'
      ]
    scriptName: 'MyScript'
    pkg: grunt.file.readJSON('package.json')
    now: new Date().getTime()
  )

  # configure grunt using our custom tasks
  grunt.initConfig tasks

  # build the javascript files exporting them into the dist folder
  grunt.registerTask 'build', [
    'clean:build'
    'jshint'
    '6to5'
    'requirejs'
    'clean:tmp'
  ]

  # build and test the output
  grunt.registerTask 'test', [
    'build'
    'mocha'
  ]

  # crossbrowser testing
  # you need to set up correctly the saucelabs connection
  # using your personal saucelabs account credentials
  grunt.registerTask 'saucelabs', [
    'connect'
    'saucelabs-mocha'
  ]

  # Default task. to make a new release
  grunt.registerTask 'default', [
    'build'
    'mocha'
  ]

  return