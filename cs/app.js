
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

var gs = (function () {
    return {
        say: function(player, what) {
            console.log(what);
            io.sockets.emit('message', { player: player, what: what })
        },

    }
})()

io.sockets.on('connection', function (socket) {
//    socket.emit('news', { hello: 'world' });
    socket.on('action', function (data) {
        if(data.action == 'click') {

        }

        console.log(data);
    });
});



var cycle = function() {
    gs.say(100, "WTF")
    setTimeout(cycle, 1000);
};

setTimeout(cycle, 0);