var webserver = require('gulp-webserver');
var gulp = require('gulp');
var opn = require('opn');

var server = {
    host : 'localhost',
    port : '8001'
}
gulp.task('webserver',function(){
    gulp.src('app').pipe(webserver({
        host: server.host,
        port: server.port,
        livereload: true,
        directoryListing: false

    }));
});

gulp.task('openbrowser',function(){
opn('http://'+server.host+':'+server.port);
});

gulp.task('watch',function(){
   gulp.watch('public/*.html')
    gulp.watch('public/css/*.css')
    });

    gulp.task('default',['webserver','openbrowser','watch']);