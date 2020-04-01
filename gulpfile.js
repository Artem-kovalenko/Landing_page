const gulp = require('gulp')
const browserSync = require('browser-sync').create();

function sync(done){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

function browserReload(done) {
    browserSync.reload();
    done();
}


function watchFiles() {
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./**/*.js", browserReload);
    gulp.watch("./**/*.css", browserReload);
}

gulp.task('default', gulp.parallel(watchFiles, sync))
gulp.task(sync);