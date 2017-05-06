var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile task
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'})
          .on('error', sass.logError))
      .pipe(gulp.dest('./static/css/'));
});

// Watch task
gulp.task('default',function() {
  gulp.watch('sass/**/*.scss',['styles']);
});