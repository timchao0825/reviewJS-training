console.log('inherit js init')
function show(a, b) {
  console.log(this, a, b)
}
// show(1, 2)
// show.call([], 2, 3)

function base() {
  console.log(this, arguments)
}
// call {參數1 , 參數2} , apply {[陣列]}
// base.call({} , 'john')
// base.call({name:'call test'} , 2 , 3 , '1' , '2')
// base.apply([1] , 2 , 3 , '1' , '2') // error
// base.apply([1] , ['apply test',2,3])
// bind 不會執行函式，但會帶入綁定項目
// base.bind({name:'bind test'})(2,3)
// var callbind = base.bind({name:'bind test 2'} , 5)
// callbind(10 , 15) // {name:'binde test 2'} , [5 ,10 , 15]

function testObject(name, age) {
  this.name = name
  this.age = age
}

var newObj = new testObject('new object', 100)
// var newObj = testObject('test', 10)
// var newObj = ('name', 100)
// console.log(newObj)
// var a = {}
// testObject.call(a, 'test', 30)
// console.log(a)

// MDN example
// var animals = [
//   {species: 'Lion', name: 'King'},
//   {species: 'Whale', name: 'Fail'}
// ];

// for (var i = 0; i < animals.length; i++) {
//   (function (i) {
//     this.print = function () {
//       console.log('#' + i  + ' ' + this.species + ': ' + this.name);
//     }
//     this.print();
//   }).call(animals[i], i);
// }

// prototype

function A() {
  this.abc = 12
  this.run = function () {
    console.log('go')
  }
}

A.prototype.show = function () {
  console.log(this.abc)
}

function B() {
  A.call(this)
}
var aObj = new A()
var bObj = new B()
// aObj.show() // 12
// bObj.show() // error , call not prototype show
