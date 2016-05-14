var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');




gulp.task('styles', function() {
  return sass('sass', { style: 'expanded' })
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['styles']);
  gulp.watch('*.html', notifyLiveReload);
  gulp.watch('css/*.css', notifyLiveReload);
  gulp.watch('js/*.js', notifyLiveReload);
});

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});


function notifyLiveReload(event) {
	console.log('notifyLiveReload done')
	console.log(event.path)
	console.log(__dirname)
  var fileName = require('path').relative(__dirname, event.path);

  console.log('fileName : ' + fileName)

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}
/*
gulp.task('watch', function() {
  gulp.watch('*.html', notifyLiveReload);
  gulp.watch('public/css/*.css', notifyLiveReload);
  gulp.watch('public/js/*.js', notifyLiveReload);
});
*/

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  //app.use(require('connect-livereload')({port: 4002}));
  app.use(require('connect-livereload')());
  app.use(express.static(__dirname));
  app.listen(4000, '0.0.0.0');
});

gulp.task('default', ['express','livereload','watch'], function() {

});