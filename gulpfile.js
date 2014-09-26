// REQUIRED DEPENDENCY DECLARATION

var gulp = require('gulp');

// Compass / Sass
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');

// Favicon Generator 
var favicons = require('favicons');

// Browsersync
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Image Minification
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');


// Image Optimization 
gulp.task('imagemin', function () {
    return gulp.src('src/images/assets/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()],
            optimizationLevel: 7
        }))
        .pipe(gulp.dest('images/assets'))
		.pipe(reload({stream:true}));
});


// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
		xip: true
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});


// Uses Compass and it's bundler dependency's and get's all required arguments via the config.rb file
// After Compass compile it runs stylesheet through autoprfixer and saves to gulp.dest
gulp.task('compass', function() {
	gulp.src('sass/*.scss')
	.pipe(compass({
		config_file: 'config.rb',
		css: 'css',
		sass: 'sass',
		bundle_exec: 'true'
	}))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ff 17', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('css'))
	.pipe(reload({stream:true}));
});

gulp.task('favicons', function() {
	favicons({
		// I/O
		source: 'images/favicons/source/favicon-master.png',
		dest: 'images/favicons',

		// Icon Types
		android: true,
		apple: true,
		coast: true,
		favicons: true,
		firefox: true,
		windows: true,
	});
});


// Production 
gulp.task('prod', ['compass', 'favicons', 'imagemin'], function() {});


// Development
gulp.task('default', ['browser-sync', 'compass'], function() {

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("sass/**/*.scss", ['compass']);
    gulp.watch("*.html", ['bs-reload']);
    gulp.watch("src/images/assets/**/*.{png,jpg,gif}", ['imagemin', 'bs-reload']);
    gulp.watch("/images/assets/**/*.{png,jpg,gif}", ['bs-reload']);
});
