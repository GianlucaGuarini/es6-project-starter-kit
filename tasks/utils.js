'use strict';

var spawn = require('child_process').spawn,
  utils = {
    /**
     * Return an options object to a valid arguments array for the child_process.spawn method
     * from:
     *   var options = {
     *     foo: 'hello',
     *     baz: 'world'
     *   }
     * to:
     *   ['--foo=hello', '--baz=world']
     *
     * @param  { object } obj
     * @param  { array } optionsPrefix
     * @param  { boolean } hasEquals set the options commands using the equal
     * @return { array }
     */
    optionsToArray: function(obj, optionsPrefix, hasEquals) {
      optionsPrefix = optionsPrefix || '--';
      var ret = [];
      for (var key in obj) {
        ret.push(optionsPrefix + key + hasEquals ? '=' : ' ');
        if (obj[key]) {
          ret.push(obj[key]);
        }
      }
      return ret;
    },
    /**
     * Run any system command
     * @param  { string } command
     * @param  { array } args command options
     * @retur  { promise } chainable promise object
     */
    exec: function(command, args) {
      return new Promise(function(resolve, reject) {
        utils.print('Executing: ' + command + ' ' + args.join(' ') + '\n', 'confirm');
        var cmd = spawn(command, args, {
          stdio: 'inherit',
          cwd: process.cwd()
        });

        cmd.stderr.on('data', function(data) {
          utils.print(data);
          reject(data);
        });

        cmd.stdout.on('data', function(data){
          utils.print(data);
          resolve(data);
        });

      });

    },
    /**
     * Log messages in the terminal using custom colors
     * @param  { String } msg
     * @param  { String } type - message type to handle the right color
     */
    print: function(msg, type) {
      var color;
      switch (type) {
        case 'error':
          color = '\x1B[31m';
          break;
        case 'warning':
          color = '\x1B[33m';
          break;
        case 'confirm':
          color = '\x1B[32m';
          break;
        case 'cool':
          color = '\x1B[36m';
          break;
        default:
          color = '';
      }
      process.stdout.write(color + ' ' + msg + '\x1B[39m');
    }
  };

module.exports = utils;