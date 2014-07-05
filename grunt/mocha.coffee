module.exports =
  test:
    src: ['test/*.html']
    options:
      run: true
      reporter: 'Spec'
      log: true
      timeout: 10000
      mocha:
        ignoreLeaks: false