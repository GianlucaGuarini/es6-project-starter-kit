# generate the content of the main github page from the markdown file
module.exports = (grunt, options) =>
  dist:
    files:[
      src: ['*.md']
      dest: 'gh-pages/index.html'
    ]
    options:
      template: 'gh-pages/template.jst'
      templateContext: options.pkg