'use strict';

var gulp       = require('gulp');

var sass       = require('gulp-sass');
var concat     = require('gulp-concat');

gulp.task('styles', function () {
  return gulp.src('assets/scss/**/*.scss')
    .pipe( sass({
      outputStyle: 'compressed',
      errLogToConsole: true,
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('build', ['styles']);

gulp.task('watch', function () {
  gulp.start('build');
  
  gulp.watch('assets/scss/**/*.scss', ['styles']);
});

gulp.task('default', function () {
  gulp.start('build');
});
