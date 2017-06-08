module.exports = function(config) {
  // karma configuration
  // http://karma-runner.github.io/0.12/config/configuration-file.html
  config.set({
    basePath: '../../',
    autoWatch: true,
    frameworks: ['mocha'],
    browserNoActivityTimeout: 120000,
    concurrency: 2,
    files: [
      'node_modules/chai/chai.js',
      'node_modules/sinon/pkg/sinon.js',
      'node_modules/sinon-chai/lib/sinon-chai.js',
      `dist/${process.env.LIBRARY_NAME}.js`,
      'test/specs/*.js',
      'test/runner.js'
    ],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      '../dist/*': ['coverage'],
      'test/**/*.js': ['babel']
    },
    'babelPreprocessor': {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },
    coverageReporter: {
      dir: './coverage/'
    },
    singleRun: true
  })
}
