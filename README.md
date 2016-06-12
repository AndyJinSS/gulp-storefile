gulp-storefile
=============

gulp plugin, write file to disk

[![NPM](https://nodei.co/npm/gulp-storefile.png?downloads=true&stars=true)](https://nodei.co/npm/gulp-storefile/)


Usage
=====

```javascript
var gulp = require('gulp');
var store = require('./../index.js');

gulp.task('default', function() {
  return gulp.src('gulpfile.js')
        .pipe(store('./new/path/file.js'));
});
```

License
=======

MIT License