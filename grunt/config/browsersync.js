module.exports = function(grunt) {

	grunt.config('browserSync', {
		dev: {
			files: {
				src: [
					'<%= project.styles_dev %>/main.dev.css',
					'<%= project.scripts_dev %>/head.scripts.dev.js',
					'<%= project.scripts_dev %>/main.scripts.dev.js',
					'<%= project.scripts_dev %>/mobile.scripts.dev.js',
					'site/templates/*.php',
					'site/snippets/*.php',
				]
			},
			options: {
				watchTask: true,
				proxy: 'local.altair',
				// logConnections: true,
				logFileChanges: true,
				// open: 'ui',
				browser: 'google chrome',
				// xip: true,
				// reloadOnRestart: true,
				// notify: false,
				ghostMode: {
					clicks: true,
					forms: true,
					scroll: true,
				},
			},
		},
	});

};