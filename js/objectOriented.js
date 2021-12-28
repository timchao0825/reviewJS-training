console.log('object oriented js init')

function Foo() {}

var foo = new Foo()

console.log(Foo.prototype)
console.log(foo.__proto__)
console.log(Foo.prototype === foo.__proto__)
