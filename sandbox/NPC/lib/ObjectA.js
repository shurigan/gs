
var events = require('events'),
    util = require('util')


module.exports = function() {
    var self = this

    events.EventEmitter.call(this)

    this.foo = function() {
       self.emit('foo');
    }

    this.getGoodsList = function() {
        var list = {}

        self.emit('goodsList', list)
    }

}

util.inherits(module.exports, events.EventEmitter);

