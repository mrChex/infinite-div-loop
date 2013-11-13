module.exports = function(grunt) {
  grunt.initConfig({

    coffee: {
      dist: {
        expand: true,
        cwd: 'coffee',
        src: ['*.coffee', '**/*.coffee'],
        dest: 'js',
        ext: '.js'
      }
    },

    watch: {
      coffee: {
        files: ['coffee/*.coffee', 'coffee/**/*.coffee'],
        tasks: ['coffee']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');


  // Setup tasks, watch should be last
  grunt.registerTask('run', ['coffee', 'watch']);
  grunt.registerTask('default', ['run']);

};