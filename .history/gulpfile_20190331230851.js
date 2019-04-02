var gulp = require('gulp'),
    gp = require('gulp-load-plugins'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');
    gcmq = require('gulp-group-css-media-queries'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer');
 
sass.compiler = require('node-sass');
 
gulp.task('serve', function() {
  browserSync.init({
      server: {
          baseDir: "./build"
      }
  });
  gulp.watch('build').on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
  }))
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/css'));
});
 
gulp.task('html', function () {
  return gulp.src('./src/**/*.html')
    
    .pipe(gulp.dest('./build/'));
});
 



gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/**/*.html', gulp.series('html'));
  

});

gulp.task('default', gulp.series(
  gulp.parallel('serve','watch'),
  'sass'
))