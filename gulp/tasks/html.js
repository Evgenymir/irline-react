'use strict';

module.exports = function() {
	$.gulp.task('html', function() {
		return $.gulp.src('./src/*.html')
			.pipe($.gulp.dest('./build/'));
	});
}