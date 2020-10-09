'use strict';

module.exports = function() {

	$.gulp.task('imageMin', function() {
		return $.gulp.src('./src/img/**/*.{png,jpg}')
			.pipe($.gp.tinypng('Gt0oLUIxJOEcvIgW2OgL6fYb_030qW4U'))
			.pipe($.gulp.dest('./build/img/'));
	});
}