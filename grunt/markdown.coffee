module.exports = (grunt, options) =>
  dist:
    files:[
      src: ['*.md']
      dest: 'demos/index.html'
    ]
    options:
      template: 'demos/template.jst'
      templateContext: grunt.util._.extend(options.pkg,{
          githubUsername:'gianlucaguarini'
          githubProjectName: 'js-project-bootstrap'
          twitterUsername: 'gianlucaguarini'
          authorHomepage: 'gianlucaguarini.com'
        })