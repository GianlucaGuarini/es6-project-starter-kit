# generate the documentation automatically from the source files
module.exports =
  dist:
    src: ['src/**/*.js'],
    options:
      destination: 'doc'