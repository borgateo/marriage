// GRUNT - rock and roll :)

module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     
    // Define our source and build folders
    js_src_path:       'public/js',
    js_build_path:     'public/js',
    css_src_path:      'assets/scss',
    css_build_path:    'public/css',

    clean: {
      css: {
        src: ['<%= css_build_path %>', '.sass-cache']
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: '<%= css_src_path %>',
          cssDir: '<%= css_build_path %>',
          debugInfo: true,
          outputStyle: 'expanded',           //nested, expanded, compact, compressed.
          raw: 'preferred_syntax = :scss\n', // Use `raw` since it's not directly available
          force: true
        }
      },
      dist: {
        options: {
          sassDir: '<%= css_src_path %>',
          cssDir: '<%= css_build_path %>',
          debugInfo: false,
          outputStyle: 'compressed',         //nested, expanded, compact, compressed.
          raw: 'preferred_syntax = :scss\n', // Use `raw` since it's not directly available
          force: true
        }
      }
    },

    concat: {
      options: {
        separator: ";\n"
      },
      // angular
      app: {
        src: ['<%= js_src_path %>/*.js'],
        dest: '<%= js_build_path %>/main.js'
      }
    },

    uglify: {
      options:{
        mangle: false,
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version + "\\n" %>' +
        '* <%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> - <%= pkg.title %> */ <%= "\\n" %>'
      },
      target_angular: {
        files: {
          '<%= js_build_path %>/main.min.js': ['<%= js_build_path %>/main.js'],
          '<%= js_lib_build_path %>/libs.min.js': ['<%= js_lib_build_path %>/libs.js']
        }
      }
    },

    watch: {
      sass: {
        files: ['assets/scss/*.scss'],
        tasks: ['compass:dev'],
        options : {
          livereload: true
        }
      },
      /* watch and see if our javascript files change, or new packages are installed */
      js: {
        files: ['<%= js_src_path %>/**/*.js', '<%= js_src_path %>/**/**/*.js'],
        tasks: ['concat:app']
      },
      templates: {
        files: ['<%= js_src_path %>/**/*.html', '<%= js_src_path %>/**/**/*.html'],
        tasks: ['copy']
      },
      images: {
        files: ['<%= images_src_path %>/**/*.*'],
        tasks: ['copy']
      },
    }

  });


  /* === Tasks === */

  // Build script, primarily used by Jenkins
  grunt.registerTask('default', 'build');
  grunt.registerTask('build', ['clean:css','compass:dist']);

  // install bower
  grunt.registerTask('install', ['shell:install']);

  // compile css
  grunt.registerTask('css', ['compass:dist']);

  // contact - uglify - minify
  grunt.registerTask('js', ['concat', 'uglify', 'copy']);

  /* --- Clean --- */
  // all
  grunt.registerTask('clean-all', ['clean:css', 'clean:js']);
  // javascript
  grunt.registerTask('clean-js', ['clean:js']);
  // css
  grunt.registerTask('clean-css', ['clean:css']);

};

