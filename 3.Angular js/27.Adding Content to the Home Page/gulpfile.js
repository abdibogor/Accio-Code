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

/** initialize **/
gulp.task('default', function(callback)
{
	 runSequence('devDeps', 'devJs', callback);
});

/** watch **/
gulp.task('watch', function()
{
	gulp.watch('src/resources/**/*.js', ['devJS']);
});

