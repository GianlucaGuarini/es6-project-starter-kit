'use strict';

/**
 * Helper functions shared across all the tasks
 */

var spawn = require('child_process').spawn,
  fs = require('fs'),
  utils = {
    /**
     * Return an options object to a valid arguments array for the child_process.spawn method
     * from:
     *   var options = {
     *     foo: 'hello',
     *     baz: 'world'
     *   }
     * to:
     *   ['--foo=', 'hello', '--baz=','world']
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
        ret.push(optionsPrefix + key + (hasEquals ? '=' : ''));
        if (obj[key]) {
          ret.push(obj[key]);
        }
      }
      return ret;
    },
    /**
     * Simple object extend function
     * @param  { object } obj1 reciver
     * @param  { object } obj2
     */
    extend: function(obj1, obj2) {
       for (var i in obj2) {
          if (obj2.hasOwnProperty(i)) {
             obj1[i] = obj2[i];
          }
       }
       return obj1;
    },
    /**
     * Run any system command
     * @param  { string } command string
     * @param  { array } args command arguments
     * @param  { object } envVariables command environment variables
     * @retur  { promise } chainable promise object
     */
    exec: function(command, args, envVariables) {

      var path = require('path');

      return new Promise(function(resolve, reject) {

        // extend the env variables with some other custom options
        utils.extend(process.env, envVariables);
        utils.print('Executing: ' + command + ' ' + args.join(' ') + '\n', 'confirm');

        var cmd = spawn(path.normalize(command), args, {
          stdio: 'inherit',
          cwd: process.cwd()
        });

        cmd.on('exit', function(code) {
          if(code === 1) {
            reject();
          } else {
            resolve();
          }
        });

      });

    },
    /**
     * Read all the files crawling starting from a certain folder path
     * @param  { string } path directory path
     * @param  { bool } mustDelete delete the files found
     * @return { array } files path list
     */
    listFiles: function (path, mustDelete) {
      utils.print('Listing all the files in the folder:' + path, 'confirm');
      var files = [];
      if(fs.existsSync(path)) {
        var tmpFiles = fs.readdirSync(path);
        tmpFiles.forEach(function(file){
          var curPath = path + '/' + file;
          files.push(curPath);
          if(fs.lstatSync(curPath).isDirectory()) { // recurse
            utils.listFiles(curPath, mustDelete);
          } else if(mustDelete) { // delete file
            fs.unlinkSync(curPath);
          }
        });
        if (mustDelete) {
          fs.rmdirSync(path);
        }
      }

      return files;
    },
    /**
     * Delete synchronously any folder or file
     * @param  { string } path
     */
    clean: function(path) {
      var files = utils.listFiles(path, true);
      utils.print('Deleting the following files: \n' + files.join('\n'), 'cool');
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
      console.log(color + ' ' + msg + '\x1B[39m');
    }
  };

module.exports = utils;
