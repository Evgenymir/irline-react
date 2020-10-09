'use strict';

module.exports = function() {
	$.gulp.task('serve', function() {
		$.browserSync.init({
			open: false,
			server: './build',
            online: true,
            tunnel: 'bespalov',
            logLevel: "debug"
		});
		$.browserSync.watch('build', $.browserSync.reload);
	});
};