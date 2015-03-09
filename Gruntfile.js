module.exports = function (grunt) {

    var path = require('path');



    // var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

    // grunt.initConfig({
    //     connect: {
    //         server: {
    //             options: {
    //                 hostname: 'localhost',
    //                 keepalive: true,
    //                 open: true,
    //                 middleware: function (connect, options) {
    //                     return [proxySnippet];
    //                 }
    //             },
    //             proxies: [{
    //                 context: '/',
    //                 host: 'google.com',
    //                 port: 80
    //             }]
    //         }
    //     }
    // });

    // grunt.loadNpmTasks('grunt-connect-proxy');
    // grunt.loadNpmTasks('grunt-contrib-connect');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'tasks'),
        data: {
            pkg: grunt.file.readJSON('package.json'),
            destDir: 'build',
            pkgDir: 'build/pkg'
        }
    });

    grunt.registerTask('default', [
        'configureProxies:server',
        'connect:server']);

};
