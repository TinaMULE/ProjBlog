// Déclaration d'un module compatible
module.exports = function (grunt) {
    //Définition de la configuration de gruent et des tâches exécutables
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Config de chaque plugin.
        cssmin: {
            app: {
                files: {
                    'dist/app.min.css': ['app.css']
                }
            }
        },
        concat: {
            app: {
                src: [
                    'app/app.js',
                    'app/*.factory.js',
                    'app/*.service.js',
                    'app/*.controller.js'
                ],
                dest: 'dist/app.js'
            }
        },
        uglify: {
            app: {
                options: {
                    sourceMap: true,
                    mangle: false
                },
                files: {
                    'dist/bundle.min.js': [
                        'node_modules/angular/angular.min.js',
                        'dist/app.js'
                    ]
                }
            }
        },
        watch: {
            cssSrc: {
                files: ['**/*.css', '!node_modules/**'],
                tasks: ['cssmin:app']
            },
            jsSrc: {
                files: ['app/*.js'],
                tasks: ['concat:app']
            }
        }
    });
    
    //Chagement des plugins.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Déclartion des tâches éxécutables.
    grunt.registerTask('default', ['cssmin:app' , 'concat:app', 'uglify:app']);
    grunt.registerTask('dev', ['watch']);
};