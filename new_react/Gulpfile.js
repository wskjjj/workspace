var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var reactify = require('reactify');
var browserify = require('browserify');
var shim = require('browserify-shim');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

//webserver
gulp.task('webserver',function(){
	gulp.src('./')
		.pipe(plugins.webserver({
			path : '/',
			open : true,
			livereload : true,
			host : '10.12.2.12',
			port : 8882
		}));
});
//connect
gulp.task('connect',function(){
	plugins.connect.server({
		root : './',
		livereload : true,
		host : '10.12.2.12',
		port : 8882
	});
});
//js
gulp.task('js',function(){
	var jsSrc = './src/**/*.js';
	var jsDst = './dist';
	gulp.src(jsSrc)
		.pipe(plugins.concat('main.js'))
		//.pipe(plugins.uglify())	
		//.pipe(plugins.babel({presets: ['react','es2015']}))	
		.pipe(plugins.rename({suffix : '.min'}))
		.pipe(gulp.dest(jsDst))
		.pipe(plugins.connect.reload());
});
//browserify
gulp.task('browserify',function(){
	var babelSrc = ['./src/js/js1.js','./src/js/js2.js'];
	var babelDst = './dist';
	browserify(babelSrc)
				// .transform(babelify,{presets: ['es2015','react']})
				.transform(reactify,{presets: ['es2015','react']})
				.transform(shim)
				.bundle()
				.pipe(source('babel.js'))
				.pipe(gulp.dest(babelDst))
				.pipe(plugins.connect.reload());
});
//css
gulp.task('css',function(){
	var cssSrc = './src/**/*.css';
	var cssDst = './dist';
	gulp.src(cssSrc)
		.pipe(plugins.concat('main.css'))
		.pipe(plugins.minifyCss())
		.pipe(plugins.rename({suffix : '.min'}))
		.pipe(gulp.dest(cssDst))
		.pipe(plugins.connect.reload());
});
//less
gulp.task('less',function(){
	var scssSrc = './src/**/*.less';
	var scssDst = './dist';
	gulp.src(scssSrc)
		.pipe(plugins.rename('less.css'))
		.pipe(plugins.less())
		.pipe(gulp.dest(scssDst))
		.pipe(plugins.connect.reload());
});
//sass
gulp.task('sass',function(){
	var scssSrc = './src/**/*.scss';
	var scssDst = './dist';
	gulp.src(scssSrc)
		.pipe(plugins.rename('sass.css'))
		//.pipe(plugins.sass({outputStyle: 'expanded'})).on('error',plugins.sass.logError)
		.pipe(gulp.dest(scssDst))
		.pipe(plugins.connect.reload());
});
//img
gulp.task('img',function(){
	var imgSrc = './src/**/*.(png,jpg,gif)';
	var imgDst = './dist';
	gulp.src(imgSrc)
		.pipe(plugins.imagemin({
			optimizationLevel: 5,
			progressive: true
		}))
		.pipe(gulp.dest(imgDst))
		.pipe(plugins.connect.reload());
});
//html
gulp.task('html',function(){
	var htmlSrc = './src/**/*.html';
	var htmlDst = './';
	gulp.src(htmlSrc)
		.pipe(plugins.rename('index.html'))
		.pipe(gulp.dest(htmlDst))
		.pipe(plugins.connect.reload());
});

//watch
gulp.task('watch',function(){
	//gulp.watch('./src/**/*.*',['html','css','js']);

	var server = gulp.watch('./src/**/*',['html','js','css','browserify']);
	server.on('change',function(event){
		console.log('path:【' + event.path + '】was【' + event.type + '】running task...' );
	});

	// gulp.watch('./src/**/*.css',['css']);
	// gulp.watch('./src/**/*.js',['js']);
	// gulp.watch('./src/**/*.html',['html']);
});

//default
gulp.task('default',['connect','watch','html','js','css','browserify']);