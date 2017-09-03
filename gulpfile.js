var gulp = require('gulp');
var tasks = require('./gulp-tasks');

gulp.task('build', tasks.build);

gulp.task('watch', tasks.watch);

gulp.task('default', ['watch']);