'use strict';

module.exports = function() {
	$.gulp.task('sprite', function() {
		return $.gulp.src('./src/img/sprite/icon-*.svg')
			.pipe($.gp.svgstore({
				inlineSvg: true
			}))
			.pipe($.gp.rename("sprite.svg"))
			.pipe($.gulp.dest('./build/img/'));
	});
}

// Вставка svg

/* 
<svg class="..." width="..." height="...">
	<use xlink:href="#icon-login"></use>
</svg>
*/