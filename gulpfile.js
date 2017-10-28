var gulp = require('gulp')
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var cssimport = require("gulp-cssimport");

gulp.task('css', function(){
    return gulp.src('photo_scout_frontend_legacy/res/style/*.scss')
        .pipe(cssimport())
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('photo_scout_frontend_legacy/assets'))
});

gulp.task('default', [ 'css' ]);

gulp.task('sass:watch', function () {
    gulp.watch('photo_scout_frontend_legacy/res/style/*.scss', ['css']);
});