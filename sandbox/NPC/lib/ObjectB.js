
var util = require('util'),
    events = require('events')


module.exports = function() {
    var self = this

    events.EventEmitter.call(this)

    this.bar = function() {
        self.emit('bar')
    }
}

util.inherits(module.exports, events.EventEmitter);
