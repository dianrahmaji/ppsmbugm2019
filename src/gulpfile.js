const gulp = require('gulp');
const htmlPartial = require('gulp-html-partial');

gulp.task('html', function() {
  return  gulp.src(['**/*.html', '!partials/**']).pipe(htmlPartial({
            basePath:__dirname + '/partials/'
          })).pipe(gulp.dest(__dirname + '/../'));
})