
var _name;

function foo() {
    console.log(_name);
}

module.exports = function (name) {
    _name = name

    console.log(_name);

    return {
        foo: foo
    }
}