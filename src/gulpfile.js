const gulp = require('gulp');
const htmlPartial = require('gulp-html-partial');
var CSS_PATH = '../src/css/**/*.css';
var JS_PATH = '../src/js/**/*.js';
var DIST_PATH = '../public';
var cleancss = require('gulp-clean-css');;
var concat = require('gulp-concat');

gulp.task('html', function() {
  return  gulp.src(['**/*.html', '!partials/**']).pipe(htmlPartial({
            basePath:__dirname + '/partials/'
          })).pipe(gulp.dest(__dirname + '/../'));
})

//styles
gulp.task('css', function (argument) {
	// body...
	console.log('starting minify css task');

	return gulp.src(CSS_PATH)
    .pipe(concat('all.css'))
    .pipe(cleancss({compatibility: 'ie8'}))
		.pipe(gulp.dest(DIST_PATH))
});

//script
gulp.task('js', function(argument){
  console.log('starting join js');

  return gulp.src(JS_PATH)
    .pipe(concat('all.js'))
    .pipe(gulp.dest(DIST_PATH))
})

