var gulp = require('gulp');
// var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
const babel = require('gulp-babel');


gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('./public'));
    // what to do for this task.
});

// Convert SASS into CSS
gulp.task('css', function() {
    gulp.src('main.css')
        // .pipe(sass())
        .pipe(gulp.dest('./public'));


});

gulp.task('js', function() {
    gulp.src(['js/apps.js', 'js/templates.js'])
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify().on('error', function(e) {
            console.log(e);
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {


    gulp.watch('./index.html', ['html']);
    gulp.watch('./js/apps.js', ['js']);
    gulp.watch('./js/templates.js', ['js'])
    gulp.watch('./main.css', ['css']);
})
