
var ObjectA = require('./ObjectA.js')
var ObjectB = require('./ObjectB.js')

var P = require('./P.js')

exports.createObjectA = function() {
    console.log('create object A')
    return new ObjectA()
}

exports.createObjectB = function() {
    console.log('create object B')
    return new ObjectB()
}

exports.createP = function(connection) {
    return new P(connection)
}