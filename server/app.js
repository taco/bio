var app = require('koa')();

var serve = require('koa-static-folder');
var rewrite = require('koa-rewrite');
var bodyParser = require('koa-body-parser');
var routes = require('./routes')


var port = process.env.PORT || 3000;

app
	.use(rewrite('/', '/index.html'))
	.use(rewrite('/*.(html|js|css|jpg)', '/public/$1.$2'))
	.use(serve('./public'))
	.use(bodyParser());

routes(app);

app.listen(port);

console.log('App now listening at port ' + port);