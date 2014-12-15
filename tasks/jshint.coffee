# lint the javascript files
module.exports =
  options:
  	jshintrc: true
  all: [
    'src/**/*.js'
    'test/**/*.js'
  ]