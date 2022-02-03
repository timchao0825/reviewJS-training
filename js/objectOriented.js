console.log('object oriented js init')

// function Foo() {}

// var foo = new Foo()

// console.log(Foo.prototype)
// console.log(foo.__proto__)
// console.log(Foo.prototype === foo.__proto__)

// function createPerson(name , gender){ // 工廠方式
//     // 原料
//     var obj = new Object()
//     // 加工
//     obj.name = name
//     obj.gender = gender
//     obj.showName = function(){
//         console.log('my name ' + this.name)
//     }
//     obj.showGender = function(){
//         console.log('my gender ' + this.gender)
//     }
//     // 出廠
//     return obj
// }

// const personA = createPerson('Tom' , 'male')
// const personB = createPerson('Amy' , 'female')
// personA.showName()
// personA.showGender()

// personB.showName()
// personB.showGender()

function CreatePerson(name, gender) {
  // 工廠方式
  this.name = name
  this.gender = gender
  this.showName = function () {
    console.log('my name ' + this.name)
  }
  this.showGender = function () {
    console.log('my gender ' + this.gender)
  }
}

var newPersonA = new CreatePerson('mike', 'male')
var newPersonB = new CreatePerson('Jane', 'female')
newPersonA.showName()
newPersonB.showName()
console.log(newPersonA)
console.log(newPersonB)

// new or not new

// function show() {
//   console.log(this)
// }
// // object show
// new show()

// // undefined
// show()
