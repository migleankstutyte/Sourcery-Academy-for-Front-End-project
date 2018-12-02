module.exports = function () {
    let gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        config = require('../gulp.config.js')();

    return gulp.src(config.scripts.src)
        //.pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(config.scripts.dist));
};
