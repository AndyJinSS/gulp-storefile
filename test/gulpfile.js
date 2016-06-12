var gulp = require('gulp');
var store = require('./../index.js');

gulp.task('default', function() {
  return gulp.src('gulpfile.js')
        .pipe(store('./new/path/file.js'));
});
