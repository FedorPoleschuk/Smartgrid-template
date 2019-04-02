var gulp = require('gulp'),
    gp = require('gulp-load-plugins'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');
    gcmq = require('gulp-group-css-media-queries'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer');
 
sass.comp('iler = require('node-sass');
 
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
 

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', gulp.series('sass')).on('change', browserSync.reload);
 

});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./src"
      }
  });
});

gulp.task('default',gulp.series(
  gulp.parallel('sass'),
  gulp.parallel('watch','serve')
));

