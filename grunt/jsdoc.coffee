# generate the documentation automatically from the source files
module.exports =
  dist:
    src: ['README.md','src/**/*.js'],
    options:
      destination: 'gh-pages/doc'