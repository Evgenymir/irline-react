global.$ = {
    path: {
        task: require('./gulp/path/tasks.js'),
    },
    gulp: require('gulp'),
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
};

$.path.task.forEach((taskPath) => {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    $.gulp.parallel(
        'pug',
        'img',
        'favicons',
        'json',
    ),
    $.gulp.parallel(
        'watch',
        'serve',
    ),
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'img',
        'favicons',
        'json',
    ),
));

$.gulp.task('imageMin', $.gulp.series(
    $.gulp.parallel(
        'imageMin',
    ),
));
