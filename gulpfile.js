var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('minify', function () {
    gulp.src('js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('js', function() {
    return gulp.src('js/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'))
       .pipe(uglify())
       .pipe(concat('script.js'))
       .pipe(gulp.dest('build'));
});
