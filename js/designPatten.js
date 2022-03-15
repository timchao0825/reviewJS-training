console.log('design pattern js init')
// 設計模式分為三類：創建型（Creational）、結構型（Structural）、行為型（Behavioral）三類
// new tips
// not prevent new set
// function CreateNumber(n) {
//   this.number = n
// }
// var obj = new CreateNumber(55)

// prevent new
function CreateNumber(n) {
  if (this instanceof CreateNumber) {
    this.number = n
  } else {
    return new CreateNumber(n)
  }
}
var obj = CreateNumber(100)
console.log(obj.number)

var array = [1, '22', 3]
var object = {
  test: '1',
  test2: 3
}
console.log('test array => ', array)
console.log('test object => ', object)
