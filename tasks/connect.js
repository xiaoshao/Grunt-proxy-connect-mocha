module.exports={
	server: {
	    options: {
	        hostname: 'localhost',
	        port: 9090,
	        keepalive: true,
	        open: true,
	        base: '.',
	        middleware: function (connect, options) {
	            if (!Array.isArray(options.base)) {
                    options.base = [options.base];
                }

                // Setup the proxy
                var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

                // Serve static files.
                options.base.forEach(function(base) {
                    middlewares.push(connect.static(base));
                });

                // Make directory browse-able.
                var directory = options.directory || options.base[options.base.length - 1];
                middlewares.push(connect.directory(directory));

                return middlewares;
	        }
	    },
	    proxies: [{
	        context: '/google',
	        host: 'google.com',
	        port: 80,
		rewrite:{
		 '^/google': ''
		}
	    },
	    {
		context: '/baidu',
                host: 'baidu.com',
                port: 80,
		rewrite:{
		 '^/google': ''
		}
	    }
	  ]
	}
};		
