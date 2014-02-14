
var events = require('events'),
    util = require('util')

module.exports = function(id) {
    var self = this

    events.EventEmitter.call(this)

    var _throttleDegree = 0,
        _throttleDegreeDest = 0

    this.id = id


    this.setThrottle = function(degree) {
        
    }

    this.move = function(speed) {
        self.emit('move', speed)
    }

}

util.inherits(module.exports, events.EventEmitter)