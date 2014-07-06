# crossbrowser testing
module.exports = (grunt, options) =>
  all:
    options:
      urls: [
        'http://127.0.0.1:9999/test/runner.html'
      ]
      # Use your opensauce credentials
      # username: 'username'
      # key: 'key'
      browsers: grunt.file.readJSON('test/saucelabs-browsers.json')
      build: process.env.TRAVIS_JOB_ID
      testname: options.pkg.name
      sauceConfig:
        'video-upload-on-pass': false


