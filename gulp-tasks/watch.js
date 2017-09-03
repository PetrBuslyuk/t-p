/**
 * Created by rfskyliner on 29.08.17.
 */
var gulp = require('gulp');

module.exports = function watch() {
    gulp.watch('src/**/*.js', ['build']);
};