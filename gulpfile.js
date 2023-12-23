const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const htmlMin = require('gulp-htmlmin');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function mimificaHtml() {
    return gulp.src('./source/index.html')
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./build'))
}



exports.watch = function() {
    gulp.watch('./source/styles/*.scss'), { ignoreInitial: false }, gulp.series(compilaSass);
    gulp.watch('./source/index.html', { ignoreInitial: false }, gulp.series(mimificaHtml));
}