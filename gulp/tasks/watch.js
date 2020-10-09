'use strict';

const reload = require('./serve');

module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch('./src/**/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('./src/img/*', $.gulp.series('img'));
		$.gulp.watch('./src/*.json', $.gulp.series('json'));
	});
};