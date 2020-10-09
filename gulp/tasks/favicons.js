'use strict';

module.exports = function() {
	$.gulp.task('favicons', function() {
		return $.gulp.src('./src/favicons/*.{png,ico}')
			.pipe($.gulp.dest('./build/favicons'));
	});
}