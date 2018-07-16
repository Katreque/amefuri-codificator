var gulp = require('gulp');
var minify = require('gulp-minify');
var del = require('del');

gulp.task('clean', function(){
     return del('./build/**', {force:true});
});

gulp.task('build', ['clean'], function() {
  gulp.src('./index.html')
    .pipe(gulp.dest('./build'));

  gulp.src('./app/**')
    .pipe(gulp.dest('./build/app/'));

  gulp.src('./images/**')
    .pipe(gulp.dest('./build/images/'));

  gulp.src('./styles/**')
    .pipe(gulp.dest('./build/styles/'));
});
