var gulp = require('gulp'),
    watch = require('gulp-watch');
var pug = require('gulp-pug');
var convertEncoding = require('gulp-convert-encoding');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');

//pug-compile
gulp.task('pugpc',function() {
  gulp.src(['./pug/pc/**/*.pug', '!./pug/**/_*.pug'])
  .pipe(plumber())
  .pipe(pug({
    pretty: true,
    doctype:'html'
  }))
  .pipe(convertEncoding({to: "shift_jis"}))
  .pipe(gulp.dest('./html/pc'));
});

gulp.task('pugsp',function() {
  gulp.src(['./pug/sp/**/*.pug', '!./pug/sp/**/_*.pug'])
  .pipe(plumber())
  .pipe(pug({
    pretty: true,
    doctype:'html'
  }))
  .pipe(convertEncoding({to: "utf-8"}))
  .pipe(gulp.dest('./html/sp/'));
});

gulp.task('watch', function() {
  gulp.watch('./pug/**/*.pug', ['pugsp','pugpc']);
});

gulp.task('default', ['watch']);

//browser-reload
gulp.task('reload',function(){
	reload();
});
