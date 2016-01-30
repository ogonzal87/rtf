var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true});


/* the code below is the same as the code in lines 3 and 4.
I am just switching the location to a module in  gulp.config.js*/
// //Plugins
// var jshint = require('gulp-jshint');
// var jscs = require('gulp-jscs');
// var util = require('gulp-util');
// var gulpprint = require('gulp-print');
// var gulpif = require('gulp-if');

gulp.task('vet', function(){
  log('Analizing source with JSHint and JSCS');

  return gulp
    .src(config.alljs)
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jscs())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('styles', function() {
  log('Compiling Less --> CSS');

  return gulp
  .src(config.less)
  .pipe($.less())
  .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
  .pipe(gulp.dest(config.temp));
});




///////

//loggin a custom message within the tasks
function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}
