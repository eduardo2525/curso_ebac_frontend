module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    './build/styles/main.css' : './source/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    './build/styles/main.min.css' : './source/styles/main.less'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    './build/index.html' : './source/index.html'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    './build/scripts/script.min.js' : './source/scripts/script.js'
                }
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'htmlmin', 'uglify']);
}