var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});