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
	gulp.src('src/**/*')
		.pipe(clean());
```
<br>PS: As of now you can't pipe it with other plugins

## Note
`This package is process of being created. Please be patient. Feel free to contribute if you like.`