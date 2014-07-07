# copy the dist folder inside the gh-pages folder
module.exports =
  dist:
    files: [
      {
        expand: true
        src:[
          'dist/**'
        ]
        dest: 'gh-pages/assets/'
      }
    ]
