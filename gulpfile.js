var gulp        = require('gulp'),
    browserSync = require('browser-sync')
    sass        = require('gulp-sass'),
    babel       = require('gulp-babel'),
    concat      = require('gulp-concat'),
    plumber     = require('gulp-plumber');



gulp.task('serve', ['process', 'compile'], function(){
  browserSync.init({
    server: {
      baseDir:'./'
    }
  })

  gulp.watch(['src/scripts/*.js'], ['compile'])
  gulp.watch(["src/sass/*.scss"], ['process']);
  gulp.watch(['*.html','src/sass/*.scss','src/scripts/*.js']).on('change', browserSync.reload)

})

gulp.task('compile', function(){
  return gulp.src('src/scripts/*.js')
              .pipe(plumber())
              .pipe(babel({
                presets:['es2015']
              }))
              .pipe(plumber.stop())
              .pipe(gulp.dest('client/js'))
})

gulp.task('process', function(){
  return gulp.src('src/sass/*.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(concat('styles.css'))
             .pipe(gulp.dest('./client/css'))
})

gulp.task('default', ['serve'])