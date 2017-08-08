// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('copy', function () {
    return gulp.src('node_modules/jquery/dist/*.{js,map}')
      .pipe(gulp.dest('js'));
});

gulp.task('sass', function() {
    gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('css/*.scss', ['sass']);
})
