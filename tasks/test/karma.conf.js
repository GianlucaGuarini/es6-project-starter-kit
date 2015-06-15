module.exports = function(config) {

  var saucelabsBrowsers = require('./saucelabs-browsers.json').browsers,
      browsers = ['PhantomJS'];

  // run the tests only on the saucelabs browsers
  if (process.env.SAUCELABS === 'true') {
    browsers = Object.keys(saucelabsBrowsers);
  }
  // karma configuration
  // http://karma-runner.github.io/0.12/config/configuration-file.html
  config.set({
      basePath: '../../',
      autoWatch: true,
      frameworks: ['mocha'],
      sauceLabs: {
        build: process.env.TRAVIS_JOB_ID,
        testName: process.env.LIBRARY_NAME
      },
      browserNoActivityTimeout: 120000,
      customLaunchers: saucelabsBrowsers,
      files: [
          'node_modules/mocha/mocha.js',
          'node_modules/chai/chai.js',
          'node_modules/sinon/lib/sinon.js',
          'node_modules/sinon-chai/lib/sinon-chai.js',
          'node_modules/babel-core/external-helpers.js',
          'dist/' + process.env.LIBRARY_NAME + '.js',
          'test/specs/*.js',
          'test/runner.js'
      ],
      browsers: browsers,
      reporters: ['progress', 'saucelabs', 'coverage'],
      preprocessors: {
          '../dist/*': ['coverage'],
          'test/**/*.js': ['babel']
      },
      'babelPreprocessor': {},
      coverageReporter: {
          dir: './coverage/'
      },
      singleRun: true
  });
};
