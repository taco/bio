var Router = require('koa-router');

module.exports = function(app) {

	var router = new Router({
		prefix: '/api'
	});

	app
		.use(router.routes())
		.use(router.allowedMethods())
};