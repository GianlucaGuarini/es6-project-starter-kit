# used for the saucelabs tests and to start a static nodejs server
module.exports =
  test:
    options:
      base: ''
      port: 9999
  serve:
    options:
      base: ''
      post: 9999
      keepalive: true
