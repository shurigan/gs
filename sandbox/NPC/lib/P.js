
var events = require('events'),
    util = require('util')

module.exports = function(id) {
    var self = this

    events.EventEmitter.call(this)

    var _throttleDegree = 0,
        _throttleDegreeDest = 0

    this.id = id


    this.setThrottle = function(degree) {
        _throttleDegreeDest = degree
        _raise('throttle')
    }

    this.move = function(speed) {
        self.emit('move', speed)
    }

    this.changeThrottle = function(time) {
        var diff = _throttleDegreeDest - _throttleDegree;

        var dt = (new Date()) - time

        _throttleDegree += diff * (dt/10000)

        _raise('throttleSet')
    }

    this.on('throttleSet', function(time) { _throttleDegree;})

    this.on('throttle', self.changeThrottle)

    var _raise = function(event) {
        self.emit(event, new Date())
    }
}

util.inherits(module.exports, events.EventEmitter)