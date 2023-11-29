module.exports = function(grunt) {
    grunt.initConfig({
    less: {
        development: {
        options: {
            paths: ['src/less']
        },
        files: {
            'build/styles/main.css': 'src/styles/main.less'
        }
        }
    },
    uglify: {
        options: {
        },
        my_target: {
        files: {
            'build/scripts/output.min.js': ['src/js/*.js']
        }
        }
    },
    watch: {
        styles: {
        files: ['src/**/*.less'],
        tasks: ['less'],
        options: {
            spawn: false,
        },
        },
        scripts: {
        files: ['src/js/*.js'],
        tasks: ['uglify'],
        options: {
            spawn: false,
        },
        },
    },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify', 'watch']);
};
