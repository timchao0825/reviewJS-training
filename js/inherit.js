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

function A(abc) {
  this.abc = abc || 12
  console.log('A prototype')
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
function C() {
  A.apply(this, arguments)
}

// var aObj = new A()
// var bObj = new B()
// aObj.show() // 12
// bObj.show() // error , call not prototype show

// 原型繼承
// B.prototype = A.prototype // 會影響到原始父類別
// B.prototype = new A() // 避免共享參考方法
// C.prototype = new A() // conosle A prototype 1
// var newObj = new B()
// console.log('newObj => ', newObj)
// newObj.show()

// var objA = new A()
// var objB = new B()
B.prototype.square = function () {
  console.log('this abc ** ==>', this.abc * this.abc)
}
C.prototype.square = function () {
  console.log('this abc ** ==>', this.abc * this.abc)
}
// objB.square()

//繼承父類別
// var objC = new C(11) // conosle A prototype 2
// objC.square()

// 暫時繼承父類別
Function.prototype.inherits = function(superCtor){
  function F(){}
  F.prototype = superCtor.prototype
  this.prototype = new F()
  this.super = superCtor.prototype
  this.prototype.constructor = this
}
function AA(abc) {
    this.abc = abc || 12
    console.log('AA class function')
}
AA.prototype.show = function () {
  console.log('AA class show fun')
}
function BB(){
  AA.apply(this , arguments)
}

BB.inherits(AA)
var objBB = new BB()
BB.prototype.show = function(){
  console.log('BB class show fun')
}
BB.prototype.square = function(){
  console.log(this.abc * this.abc)
}
// console.log(BB.prototype)
objBB.square()
objBB.show()
// objBB.constructor.super.show()

// 共享參考
// var arr1 = [1, 2, 3]
// var arr2 = arr1
// arr2.push(4)

// console.log('arr1 => ', arr1)
// console.log('arr2 => ', arr2)

// 避免共享參考
// var arr1 = [1, 2, 3]
// var arr2 = arr1
// // var arr2 = arr1.slice()
// arr2.push(4)
// console.log('arr1 => ', arr1)
// console.log('arr2 => ', arr2)
// arr2 = null
// console.log('arr1 => ', arr1)
// console.log('arr2 => ', arr2)
