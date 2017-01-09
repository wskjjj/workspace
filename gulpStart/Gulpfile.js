const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const path = {
	jsSrc: 'src/**/*.js',
	htmlSrc: 'src/**/*.html',


	jsDst: 'build/js',
	htmlDst: './'
}

//js
gulp.task('js',() => {
	gulp.src(path.jsSrc)
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.uglify())
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(gulp.dest(path.jsDst));
});
//html
gulp.task('html',() => {
	gulp.src(path.htmlSrc)
		.pipe(plugins.rename('index.html'))
		.pipe(gulp.dest(path.htmlDst));
});

//watch
gulp.task('watch',() => {
	const watcher = gulp.watch('src/**/*.*',['js','html']);
	watcher.on('change',(event) => {
		console.log('path:【' + event.path + '】was【' + event.type + '】running task...' );
	});
});

//default
gulp.task('default',['watch','js','html']);