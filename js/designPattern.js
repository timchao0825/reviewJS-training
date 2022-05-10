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
// var iterator = (function () {
//   var index = 0,
//     data = [1, 2, 3, 4, 5],
//     length = data.length
//   return {
//     next() {
//       index = index + 1
//     },
//     hasNext() {
//       return index < length
//     },
//     first() {
//       index = 0
//     },
//     current() {
//       return data[index]
//     }
//   }
// })()

// iterator.first()
// while (iterator.hasNext()) {
//   console.log(iterator.current())
//   iterator.next()
// }

// 裝飾者模式
// 將原本物件加上功能或強化目標的新增功能
// 原本物件也必須得設計成容易強化
// function Computer(){
//   this.price = function(){
//     return 41900;
//   }
// }
// function addMemory(computer){
//   var price = computer.price()
//   computer.price = function(){
//     return price + 10000
//   }
// }
// function addThirdParty(computer){
//   var price = computer.price()
//   computer.price = function(){
//     return price + 3000
//   }
// }

// let nb = new Computer()
// console.log(nb.price())
// addMemory(nb)
// console.log('add Memory' , nb.price())
// addThirdParty(nb)
// console.log('add Third Party' , nb.price())

// 策略模式
// 模式可依照不同情況選擇不同的策略方式，基本上使用的操作介面
// 也可依照不同的程式運作

// const data = {
//   name: 'john',
//   message: 'hello there'
// }

// function Sender(strategy){
//   this.strategy = strategy
// }

// Sender.prototype.send = function(data) {
//   return this.strategy.send(data)
// }

// var handleStrategy = {
//   send: function(){
//     console.log(data)
//     var str = `<xml><name>${data.name}</name></xml>`
//     return str
//   }
// }

// var johnStategy = {
//   send: function() {
//     var str = JSON.stringify(data)
//     return str
//   }
// }

// var sender = new Sender(handleStrategy)

// var result = sender.send(data)

// console.log(result)

// 外觀模式 (常見的設計模式)
// 子系統中的一組介面提供一個統一個高層介面，使得子系統容易使用，簡化複雜的操作流程
// 生活範例：生活中買電腦，聯絡電腦公司告知預算與需求，幫你組一台電腦
var cpu = {
  execute:function(){
    console.log('execute')
  }
}

var memory = {
  load:function(){
    console.log('load')
  }
}

var hdd = {
  write:function(){
    console.log('write')
  }
}

var computer = {
  work:function(value){
    memory.load()
    cpu.execute()
    hdd.write()
    console.log('work', value)
  }
}

var user = {
  main: function(){
    computer.work(1)
    computer.work(2)
  }
}

user.main()