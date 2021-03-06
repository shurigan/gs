
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 8088);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

if ('production' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/game/*', function(req, res, next) {
    console.log('self middleware on ' + req.url);
    if(req.url == "/game/aaa") {
        res.send(404, 'asasd');
    } else {
        next();
    }
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express running in ' + app.get('env') + ' environment.');
  console.log('Express server listening on port ' + app.get('port'));
});
