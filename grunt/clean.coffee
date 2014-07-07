# Use this task to delete all the folders and the files you don't need anymore
# Some grunt tasks could create extra folders you want to remove
module.exports =
  build:
    src: ['dist']
  'gh-pages':
  	src: ['.grunt']