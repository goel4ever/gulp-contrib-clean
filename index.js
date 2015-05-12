'use strict';

var through     = require('through2'),
    fs          = require('fs'),
    PluginError = require('gulp-util/lib/PluginError');

var pluginName = 'gulp-contrib-clean';

module.exports = function( opts ) {

  function clean(file, encoding, callback) {
    var options = opts || {};

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new PluginError(pluginName, 'Streaming not supported'));
    }

    if(file.isBuffer()) {
      fs.unlinkSync(file.path);

      if(options) {
        // TODO: Implement options
        console.log('Options to be implemented')
      }

      callback( null, file );
    }
  }

  return through.obj(clean);
};