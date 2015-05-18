'use strict';

var through     = require('through2'),
    fs          = require('fs'),
    PluginError = require('gulp-util/lib/PluginError');

var pluginName = 'gulp-contrib-clean';

module.exports = function( opts ) {

  var deleteFolderFilesRecursive = function(path) {
    var ctrFiles = 0;
    var ctrFolders = 0;
    if( fs.existsSync(path) ) {
      if (fs.lstatSync(path).isDirectory()) {
        fs.readdirSync(path).forEach(function(file) {
          var currentPath = path + "/" + file;
          if (fs.lstatSync(currentPath).isDirectory()) {
            deleteFolderFilesRecursive(currentPath);
          } else {
            fs.unlinkSync(currentPath);
            ctrFiles++;
          }
        });
        fs.rmdirSync(path);
        ctrFolders++;
      } else {
        fs.unlinkSync(path);
        ctrFiles++;
      }
    }
    console.log('Total Files deleted: ' + ctrFiles);
    console.log('Total Folders deleted: ' + ctrFolders);
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
    //callback( null, file );
  }

  return through.obj(clean);
};