
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'scripts/app/**/*.js'],
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '.',
          keepalive: true
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "scripts",
          mainConfigFile: "scripts/main.js",
          name: "main",
          out: "build/js/app.js"
        }
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, src: ['index.html'], dest: 'build/'},
          {expand: true, src: ['scripts/css/**'], dest: 'build/css'},
        ]
      }
    },
    'useminPrepare': {
      html: 'index.html',
      options: {
        flow: {
          html: {
            steps: {'js': ['requirejs']},
            post: {}
          }
        }
      }
    },
    usemin :{
      html: 'build/index.html'
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['jshint','connect']);
  grunt.registerTask('dist', ['copy','requirejs','usemin']);

};
