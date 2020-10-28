'use strict';

module.exports = function() {
    $.gulp.task('json', function() {
        return $.gulp.src('./src/API/*.json')
            .pipe($.gulp.dest('./build/'));
    });
};