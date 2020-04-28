var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('app/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('build', gulp.series(('sass'), function() {
  return gulp.src(['app/*.html', 'app/images/**/*.png', 'app/js/**/*.js', 'app/php/**/*.php'], { base: './app' })
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
}));

gulp.task('start', gulp.series(('build'), function (done) {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  });
  gulp.watch("app/scss/**/*.scss", gulp.series('sass'));
  gulp.watch("app/*.html", gulp.series('build'));
  gulp.watch("app/js/**/*.js", gulp.series('build'));
  done();
}));