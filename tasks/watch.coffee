module.exports =
  options:
  	livereload: true
  js:
    files: ['src/**/**/*.js']
    tasks: ['jshint']
  test:
    files: ['test/**/*.js']
    tasks: ['mocha']