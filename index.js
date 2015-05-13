'use strict';

var through     = require('through2'),
    fs          = require('fs'),
    PluginError = require('gulp-util/lib/PluginError');

var pluginName = 'gulp-contrib-clean';

module.exports = function( opts ) {

  var deleteFolderFilesRecursive = function(path) {
    if(fs.lstatSync(path).isDirectory()) {
      if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file){
          var currentPath = path + "/" + file;
          if(fs.lstatSync(currentPath).isDirectory()) {
            deleteFolderFilesRecursive(currentPath);
          } else {
            fs.unlinkSync(currentPath);
          }
        });
        fs.rmdirSync(path);
      }
    } else if( fs.existsSync(path) ) {
      fs.unlinkSync(path);
    }
  };

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

    callback( null, file );
  }

  return through.obj(clean);
};