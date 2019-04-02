var gulp = require("gulp"),
    sass = require("gulp-sass"),
    rename = require("gulp-rename"),
    livereload = require("gulp-livereload"),
    minifyCss = require("gulp-cssnano"),
    pug = require("gulp-pug"),
    watch = require("gulp-watch");

gulp.task('sass', function () {
  return gulp.src('assets/scss/main.scss') // attention
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(rename('main.min.css')) // attention
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload());
});

gulp.task('watch-sass', function () {
  gulp.watch('./assets/scss/**/*.scss', gulp.series('sass')); // attention
});

gulp.task('jade', function () {
  return gulp.src('./*.pug') // index.pug
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./')); // index.html
});

gulp.task('watch-pug', function () {
  gulp.watch('./**/*.pug', gulp.series('jade')); // attention
});

gulp.task('default', gulp.parallel('sass', 'watch-sass', 'jade', 'watch-pug'));