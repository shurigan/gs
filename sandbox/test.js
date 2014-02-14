
var NPC = require('./NPC'),
    events = require('events'),
    util = require('util')

var a = NPC.createObjectA()
var b = NPC.createObjectB()

b.on('bar', function() {
    console.log('B:bar')
})


function S() {
    var self = this
    var _l = {}

    events.EventEmitter.call(this)

    this.objectMove = function(sp) {
        console.log(this)
        console.log(sp)
    }

    this.addP = function(p) {
        if(p instanceof events.EventEmitter) {
            p.on('move', self.objectMove)
        }
        _l[p.id] = p
    }

    this.delP = function(p) {
        delete _l[p.id]
    }

    this.logL = function() {
        console.log(util.inspect(_l))
    }
}

util.inherits(S, events.EventEmitter)


var p1 = NPC.createP(1)
var p2 = NPC.createP(2)

var SS = new S();

SS.addP(p1);
SS.addP(p2);

//SS.logL()

SS.delP(p2)

//SS.logL()

p1.move(10)

/*
a.on('foo', b.bar)

a.foo()

var list = b.getGoodsList()

b.on('goodsList', function(list) {
    console.log(list);
})
*/

