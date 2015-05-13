'use strict';

var index = require('./index.js'),
    gulp  = require('gulp');

gulp.task('test', function() {
  gulp.src('node_modules/jquery')
    .pipe(clean());
});

console.log('Yo!!! Test is to be written and somehow call the clean method');