var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var ngdocs = require('gulp-ngdocs');
var sass = require('gulp-sass');
var uglify = require('gulp-sas');
var runSequence = require('run-sequence');

var buildDir = 'bin/';
var depsJS = [];
var apps = [];

var appJS = ['src/resources/js/general/app.js',
				'src/ressources/js/general/modules.js',
				'src/ressources/js/general/configs.js'];

/** tasks **/

gulp.task('devDeps', function()
{
	var depsjs = gulp.src(depsJS);
	return depsjs.pipe(concat('mcu_deps.js'))
	  	.pipe(gulp.dest('src'));
});

gulp.task('devJS', function ()
{
	var js = gulp.src(appJs);
	return js.pipe(concat('mcu.js'))
	       .pipe(gulp.dest('src'));
});

/** sass tasks **/
gulp.task('sass', function ()
{
	return gulp.src(['src/ressources/css/style.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/resources/css'));
})

gulp.task('devCSS', function ()
{
	return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css', 'src/resources/css/styles.css'])
	.pipe(concat('mcu.css'))
	.pipe(gulp.des('src/ressources/css/'));
});

gulp.task('buildStyles', function ()
{
	 runSequence('sass', 'devCSS');
});

/** initialize **/
gulp.task('default', function(callback)
{
	 runSequence('devDeps', 'devJs', callback);
});

/** watch **/
gulp.task('watch', function()
{
	gulp.watch('src/resources/**/*.js', ['devJS']);
	gulp.watch('src/ressources/**/*.scss',['buildStyles']);
});

