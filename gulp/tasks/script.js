'use strict';

module.exports = function() {
	$.gulp.task('script:dev', function() {
		return $.gulp.src('./src/js/*.js')
			.pipe($.webpackStream( require('../../webpack.config.js') ))
			.pipe($.gp.rename({ suffix: '.min' }))
			.pipe($.gulp.dest('./build/js/'));
			
	});

	$.gulp.task('script:build', function() {
		return $.gulp.src('./src/**/*.js')
			.pipe($.webpackStream( require('../../webpack.config.js') ))
			// .pipe($.gp.uglify())
			.pipe($.gp.rename({ suffix: '.min' }))
			.pipe($.gulp.dest('./build/js/'));
	});
}