var gulp = require('gulp'),
    gp = require('gulp-load-plugins'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');
    gcmq = require('gulp-group-css-media-queries');
 
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/scss/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(gulp.dest('./build/css'));
});
 

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
  

});

