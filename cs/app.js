
var connect = require('connect'),
    http = require('http'),
    io = require('socket.io');

var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static(__dirname + '/static'));

var httpPort = process.argv[2] | 8088;

http = http.createServer(app);
io = io.listen(http);

http.listen(httpPort);

io.sockets.on('connection', function (socket) {
//    socket.emit('news', { hello: 'world' });
    socket.on('click', function (data) {
        io.sockets.emit('news', { hello: data.data });
        console.log(data);
    });
});