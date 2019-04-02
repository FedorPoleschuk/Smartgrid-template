var gulp = require('gulp'),
    gp = require('gulp-load-plugins'),
    sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/scss/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});
 
