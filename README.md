# gulp-contrib-clean
Gulp: Delete files and folders

## Installation
```javascript
npm install gulp-contrib-clean --save-dev
````

## Usage
```javascript
var clean = require('gulp-contrib-clean');

gulp.task('clean', function() {
	gulp.src('src/js')
		.pipe(clean());
```
<br>PS: As of now you can't pipe it with other plugins or use regular expressions

## Note
`This package is process of being created. Please be patient. Feel free to contribute if you like.`

## TODO
* List all files and folders deleted if option verbose is passed
* Make the plugin work with pattern matching
* Support multiple sources
* Support negation
* Display what was not found or could not be deleted - Error handling
