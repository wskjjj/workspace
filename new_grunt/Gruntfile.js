module.exports = (grunt) => {
	//initConfig
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),		
		//concat
		concat: {
			options: {
				separator: '\n'
			},
			jsDst: {
				 src: './src/js/*.js',
				dest: './build/js/main.min.js'
			}
		},		
		//uglify
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
			},
			compressjs: {
				 src: './build/js/main.min.js',
				dest: './build/js/main.min.js'
			}
		},
		//jshint
		jshint: {
			files: ['./src/**/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		//sass
		sass: {
			options: {
				style: 'expanded',
				noCache: true,
				sourcemap: 'none'
			},
			dist: {
				 src: './src/**/*.scss',
				dest: './build/css/sass.css'
			}
		},
		//html
		htmlmin: {
			options: {                                 
	        	removeComments: false,
	        	collapseWhitespace: false
	      	},
			build: {
				 src: './src/**/*.html',
				dest: './index.html'
			}
		},
		//watch
		watch: {
			files: ['./src/**/*.*','./bower/**/*.js'],
			tasks: ['concat','jshint','uglify','sass','htmlmin'],
			options: {
				livereload: true
			}
		},
		//connect
		connect: {
			server: {
				options: {
					base: './',
					open: true,
					livereload: true,
					port: 8881,
					hostname: '10.12.2.12'
				}
			}
		}
	});
	//loadNpmTasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	//registerTask
	grunt.task.registerTask('concatit','a concat description',function(agr){
		if(arguments.length === 0){
			grunt.log.write(this.name + ',no arg');
		}
		else{
			grunt.log.write(this.name + arg);
		}
	});
	grunt.registerTask('compressjs',['concat','jshint','uglify']);
	grunt.registerTask('watchit',['sass','htmlmin','concat','jshint','uglify','connect','watch']);
	grunt.registerTask('default',['watchit']);
};