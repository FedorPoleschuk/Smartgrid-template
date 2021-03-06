var gulp = require('gulp'),
    gp = require('gulp-load-plugins'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/scss/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});
 

gulp.task('stream', function () {
  return watch('src/**/*.sass', { ignoreInitial: false })
  .pipe(gulp.dest('sass'));

}