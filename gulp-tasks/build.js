/**
 * Created by rfskyliner on 29.08.17.
 */
var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

module.exports = function build() {
    var b = browserify({
        entries: 'src/main.js',
        debug: true
    })
        .transform(babelify);
    
    console.log('new build');
    
    return b.bundle()
        .pipe(source('builded-app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./'));
};