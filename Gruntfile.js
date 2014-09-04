module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            dist: {
                options: {
                    cleancss: true,
                    paths: ["style", "bower_components/bootstrap/less"]
                },
                files: {
                    "dist/css/moravia.min.css": "less/moravia.less"
                }
            },
            dev: {
                options: {
                    cleancss: false,
                    paths: ["style", "bower_components/bootstrap/less"]
                },
                files: {
                    "dist/css/moravia.css": "less/moravia.less"
                }
            }
        },

        copy: {
            all: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'bower_components/bootstrap/dist/fonts/**'
                        ],
                        dest: 'dist/fonts',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true, 
                        src: [
                            'bower_components/jquery/dist/**',
                            'bower_components/bootstrap/dist/js/**'
                        ],
                        dest: 'dist/js',
                        filter: 'isFile'
                    }
                ]
            }
        },

        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less:dev'],
                options: {
                    spawn: false,
                },
            }
        },

    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks    
    grunt.registerTask('dist', ['less:dist', 'copy:all']);
    grunt.registerTask('dev', ['less:dev', 'copy:all', 'watch']);
    grunt.registerTask('default', ['dev']);

};