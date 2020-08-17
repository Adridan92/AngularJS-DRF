module.exports = function (grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 9000,
					base: './',
				},
			},
		},
		watch: {
			project: {
				files: [
					'./assets/services/*.js',
					'./assets/directives/*.js',
					'./assets/controllers/*.js',
					'./assets/js/*.js',
					'./assets/data/*.json',
					'./*.html',
					'./assets/directives/partials/*.html',
					'./assets/css/*.css',
				],
				options: {
					livereload: true,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['connect', 'watch']);
};
