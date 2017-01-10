const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const path = {
	jsSrc: 'src/**/*.js',
	htmlSrc: 'src/**/*.html',


	jsDst: 'build/js',
	htmlDst: './'
}

//connect
gulp.task('connect',() => {
	plugins.connect.server({
		root: './',
		port: 8880,
		livereload: true,
		host: '10.12.2.12'
	});
});
//js
gulp.task('js',() => {
	gulp.src(path.jsSrc)
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.uglify())
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(gulp.dest(path.jsDst))
		.pipe(plugins.connect.reload());
});
//html
gulp.task('html',() => {
	gulp.src(path.htmlSrc)
		.pipe(plugins.rename('index.html'))
		.pipe(gulp.dest(path.htmlDst))
		.pipe(plugins.connect.reload());
});

//watch
gulp.task('watch',() => {
	const watcher = gulp.watch('src/**/*.*',['js','html']);
	watcher.on('change',(event) => {
		console.log('path:【' + event.path + '】was【' + event.type + '】running task...' );
	});
});

//default
gulp.task('default',['js','html','watch','connect']);