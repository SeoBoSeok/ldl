const gulp        = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:3000"
    });

    gulp.watch("./assets/css/*.css").on('change', browserSync.reload);;
    gulp.watch("./*.html").on('change', browserSync.reload);
});