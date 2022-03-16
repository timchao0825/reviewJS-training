console.log('design pattern js init')
// 設計模式分為三類：創建型（Creational）、結構型（Structural）、行為型（Behavioral）三類
// new tips
// not prevent new set
// function CreateNumber(n) {
//   this.number = n
// }
// var obj = new CreateNumber(55)

// prevent miss add new function
// function CreateNumber(n) {
//   if (this instanceof CreateNumber) {
//     this.number = n
//   } else {
//     return new CreateNumber(n)
//   }
// }
// var obj = CreateNumber(100)
// console.log(obj.number)

// var array = [1, '22', 3]
// var object = {
//   test: '1',
//   test2: 3
// }
// console.log('test array => ', array)
// console.log('test object => ', object)

// 單體模式 singleton
// function Cat() {
//   if (typeof Cat.instance === 'object') {
//     return Cat.instance
//   }
//   this.name = 'Amy'
//   Cat.instance = this
// }
// Cat.prototype.getName = function () {
//   return 'get name => ' + this.name
// }

// var cat1 = new Cat()
// var cat2 = new Cat()
// console.log(cat1 === cat2)
// cat1.name = 'betty'

// // 單體模式換值的時候，會同時更換
// console.log(cat1.name)
// console.log(cat2.name)

// 適用情境為
// 常用呼叫api之行為，只需要呼叫同一個function即可
// 不需要一直重複建立new instance

// 工廠模式 factory
// Function.prototype.inherits = function (superCtor) {
//   Object.setPrototypeOf(this.prototype, superCtor.prototype)
//   this.super = superCtor.prototype
// }
// function Drink() {}
// Drink.prototype.showColor = function () {
//   console.log('Drink color => ', this.color)
// }

// function Coffee() {
//   this.color = 'Brown'
// }
// Coffee.inherits(Drink)

// var factory = {
//   build: function (type) {
//     return new type()
//   }
// }

// var coffee = factory.build(Coffee)
// coffee.showColor()

// 迭代器模式
// 只允許操縱定好的方式，確保資料的正確性
var iterator = (function () {
  var index = 0,
    data = [1, 2, 3, 4, 5],
    length = data.length
  return {
    next() {
      index = index + 1
    },
    hasNext() {
      return index < length
    },
    first() {
      index = 0
    },
    current() {
      return data[index]
    }
  }
})()

iterator.first()
while (iterator.hasNext()) {
  console.log(iterator.current())
  iterator.next()
}
