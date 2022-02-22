console.log('prototype js init')

const ary1 = new Array(12, 55, 43, 32, 44)

// ary1.sum = function () {
//   let output = 0
//   for (let i = 0; i < this.length; i++) {
//     output += this[i]
//   }
//   return output
// }
// console.log(ary1.sum()) // 186
const ary2 = new Array(12, 31, 11)
// console.log(ary2.sum()) output:error

// ---
// 原型
// ---
Array.prototype.sum = function () {
  let output = 0
  for (let i = 0; i < this.length; i++) {
    output += this[i]
  }
  return output
}

// console.log(ary1.sum()) // 186
// console.log(ary2.sum()) // 54

ary1.sum = function () {
  return 'ary1 sum function'
}
// console.log(ary1.sum())

// ---
// 物件
// ---
function foo(val) {
  this.value = val
}

var demo = new foo(100)
// console.log(demo) // 100
// console.log(demo.__proto__)
// console.log(foo.prototype)
// console.log(demo.__proto__ === foo.prototype)

// ---
// 共用方法
// ---
function CreatePerson(name, gender, year) {
  this.name = name
  this.gender = gender
  // ---
  // 唯讀方法
  // ---
  Object.defineProperty(this, 'blood', {
    value: 'B type',
    writable: false
  })

  // ---
  // 私有函式與變數
  // 私有函式，只有createPerson裡頭才可以使用的function
  // ---
  function calcAge(y) {
    var today = new Date()
    return today.getFullYear() - y
  }
  var age = calcAge(year)
  this.showAge = function () {
    console.log('person age => ', age)
  }
}
CreatePerson.prototype.showName = function () {
  console.log(this.name)
}
CreatePerson.prototype.showGender = function () {
  console.log(this.gender)
}
CreatePerson.prototype.showBlood = function () {
  console.log(this.blood)
}
var nick = new CreatePerson('nick', 'male', 1991)
var mary = new CreatePerson('mary', 'female', 1993)
// nick.showName() // nick
// nick.showGender() // male
// nick.showAge() // 31

// ---
// 共用方法搭配內建原型方法
// ---
String.prototype.toNum = function () {
  return parseInt(this)
}
var ten = '10'
// console.log(ten.toNum()) // 10

// ---
// 唯獨方法和屬性
// ---
// nick.name = 'test'
// nick.showName() // 會變為test
// nick.showBlood() // b type
// nick.blood = 'c type'
// nick.showBlood() // error - read only

// ---
// 實字模式
// ---
var test = function () {}
var cat = {} // = new object
// console.log(test)
cat.name = 'tom'
cat.getName = function () {
  return this.name
}

// also like
// var cat = {
//   name: 'tom',
//   getName: function () {
//     return this.name
//   }
// }

// let json = {
//   name: 'tom',
//   show: function () {
//     console.log(this.name)
//   },
//   empty: undefined,
//   nothing: null
// }
// let jsonString = JSON.stringify(json)
// console.log(jsonString)
// let jsonObject = JSON.parse(jsonString)
// console.log(jsonObject)

// ---
// 命名衝突
// ---
// function a() {
//   console.log('a')
// }

// function a() {
//   console.log('b')
// }
// a() // b , strict will cause error

// 利用 object 命名空間
let ns = {}
ns.common = {}
ns.custom = {}

ns.common.a = function () {
  console.log('a')
}

ns.custom.a = function () {
  console.log('b')
}

// ns.common.a() // a
// ns.custom.a() // b
