/* required methods */
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

/* tasks*/
gulp.task('depsjs', function()
{
	return gulp.src(['bower_components/modernizr.js'
		'bower_components/jquery/dist/jquery.js',
		'bower_components/bootstrap/dist/js/bootstrap.js'])
		.pipe(concat('gulptutorial.js'))
		.pipe(gulp.dest('src'));
});

gulp.task('depsDist', function()
{
   return gulp.src(['src/deps.js'])
   .pipe(rename('deps.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('bin'))
})

gulp.task('default', function()
{
   return gulp.src({
        	.pipe(concat('gulptutorial.js'))
		.pipe(gulp.dest('src'))
		.pipe(rename('gulptutorial.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('bin'));
})

gulp.task('default', function()
{
	runSequence('depsjs', 'depsDist', callback);
});