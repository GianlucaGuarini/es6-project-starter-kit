# crossbrowser testing
module.exports = (grunt, options) =>
  all:
    options:
      urls: [
        'http://127.0.0.1:9999/test/runner.html'
      ]
      # Remember to change these using your project opensauce credentials
      username: 'es6projectstarterkit'
      key: 'bedf1991-5777-472f-8e14-3cde10fbd01f'
      browsers: grunt.file.readJSON('test/saucelabs-browsers.json')
      build: process.env.TRAVIS_JOB_ID
      testname: options.pkg.name
      sauceConfig:
        'video-upload-on-pass': false


