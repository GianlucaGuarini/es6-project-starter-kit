module.exports =
  options:
  	livereload: true
  js:
    files: ['src/**/*.js']
    tasks: ['jshint']
  css:
    files: ['demos/assets/scss/**/*.scss']
    tasks: ['compass']
  test:
    files: ['test/**/*']
    tasks: ['requirejs','mocha']