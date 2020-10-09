'use strict';

module.exports = function() {
	$.gulp.task('sass:dev', function() {
		return $.gulp.src('./src/css/*.scss')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass())
			.on('error', $.gp.notify.onError({
				title: 'style'
			}))
			.pipe($.gp.autoprefixer({
				overrideBrowserslist: ['last 3 versions'],
				cascade: false
			}))
			.pipe($.gcmq())
			.pipe($.gp.cssbeautify())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('./build/css'))
	});

	$.gulp.task('sass:build', function() {
		return $.gulp.src('./src/css/*.scss')
			.pipe($.gp.sass())
			.on('error', $.gp.notify.onError({
				title: 'style'
			}))
			.pipe($.gp.autoprefixer({
				overrideBrowserslist: ['last 3 versions'],
				cascade: false
			}))
			.pipe($.gcmq())
			.pipe($.gp.cssbeautify())
			.pipe($.gp.csso())
			.pipe($.gulp.dest('./build/css'))
	});
}

