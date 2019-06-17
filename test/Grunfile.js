module.exports = function(grunt) {
    grunt.initConfig({
        qunit: {
            files: ['test.html']
        }
    });

    // Load plugin
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Task to run tests
    grunt.registerTask('test', 'qunit');
};
