'use strict';

module.exports = function() {
	$.gulp.task('scriptLibs', function() {
		return $.gulp.src('./src/js/libs/*.js')
			.pipe($.gulp.dest('./build/js/'));
	});
}