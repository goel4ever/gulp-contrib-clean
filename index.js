'use strict';

var through     = require('through2'),
    fs          = require('fs'),
    PluginError = require('gulp-util/lib/PluginError');

var pluginName = 'gulp-contrib-clean';

module.exports = function( opts ) {

  var deleteFolderFilesRecursive = function(path) {
    if( fs.existsSync(path) ) {
      if (fs.lstatSync(path).isDirectory()) {
        fs.readdirSync(path).forEach(function(file) {
          var currentPath = path + "/" + file;
          if (fs.lstatSync(currentPath).isDirectory()) {
            deleteFolderFilesRecursive(currentPath);
          } else {
            fs.unlinkSync(currentPath);
          }
        });
        fs.rmdirSync(path);
      } else {
        fs.unlinkSync(path);
      }
    }
  };

  // TODO: Add total number of files and folders deleted
  // TODO: List all files and folders deleted
  // TODO: Make it work with pattern matching
  function clean(file, encoding, callback) {
    var options = opts || {};

    if (file.isStream()) {
      return callback(new PluginError(pluginName, 'Streaming not supported'));
    }

    if (file.isNull() || file.isDirectory()) {
      deleteFolderFilesRecursive(file.path);

      if(options) {
        // TODO: Implement options
        console.log('Options to be implemented');
      }
    }
    //callback( null, file );
  }

  return through.obj(clean);
};