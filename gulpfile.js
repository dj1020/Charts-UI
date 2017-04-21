'use strict';

var gulp = require('gulp');

// BROWSER
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// CONFIG
var fs = require('fs');
var rimraf = require('gulp-rimraf');
var data = require('gulp-data');
var concat = require('gulp-concat');
var config = require('./gulp.config.js')();

// DEBUG
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var chalk = require('chalk');

// HTML
var pug = require('gulp-pug');

// CSS
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// JS
var uglify = require('gulp-uglify');

gulp.task("clean:assets", function(){

	console.log(chalk.cyan("Cleaning assets..."));

	return gulp.src(config.assets.cleanSrc, { read: false })
            .pipe(rimraf({
                force: true
            }));
});

gulp.task("recopy:assets", ["clean:assets"], function(){

	console.log(chalk.cyan("Copying assets..."));

	return gulp.src(config.assets.src)
		.pipe(gulp.dest(config.assets.dest));
});

gulp.task("copy:assets", ["recopy:assets"], function(){
	reload();
});

gulp.task("build:html", function(){

	console.log(chalk.cyan("Building markups..."));

	return gulp.src(config.pug.src)
		.pipe(plumber())
		.pipe(data(function(){
			return JSON.parse(fs.readFileSync(config.pug.config));
		}))
		.pipe(pug({
			pretty: gutil.env.type==="prod"?false:true
		}))
		.pipe(plumber.stop())
		.pipe(gulp.dest(config.pug.dest));
});

gulp.task("build:pug", ["build:html"], function(){
	reload();
});

gulp.task("build:sass", function(){

	console.log(chalk.cyan("Building styles..."));

	return gulp.src(config.sass.src)
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass({
			outputStyle: gutil.env.type==="prod" ? 'compressed' : gutil.noop()
		}).on('error', sass.logError ))
		.pipe(autoprefixer({browsers: ['last 2 versions', 'IE >= 8', 'Firefox >= 20']}))
		.pipe(plumber.stop())
		.pipe(gutil.env.type!=="prod" ? sourcemaps.write('.') : gutil.noop())
		.pipe(gulp.dest(config.sass.dest))
		.pipe(reload({ stream: true }));
});

gulp.task("build:js", function(){

	console.log(chalk.cyan("Building scripts..."));

	return gulp.src(config.js.src)
		.pipe(sourcemaps.init())
		.pipe(plumber())
		// .pipe(uglify())
		// .pipe(concat(config.js.name))
		.pipe(plumber.stop())
		.pipe(gutil.env.type!=="prod" ? sourcemaps.write('.') : gutil.noop())
		.pipe(gulp.dest(config.js.dest))
		.pipe(reload({ stream: true }));
});

var runArray = ["copy:assets", "build:pug", "build:sass", "build:js"];

gulp.task('build', runArray);

gulp.task('watch', function(){

	runArray.map(function(el) {
		watch(config[el.split(":")[1]].watch, function(){
			gulp.start(el);
		});
	});

});

gulp.task('server', ['build'], function(){
	browserSync.init({
		notify: false,
		server: {
			base: "./"
		}
	});
});

gulp.task('default', ['server', 'watch']);


