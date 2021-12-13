console.log('coding style js init')

// 大括號分行與不分行
// function test() {
//   return {
//     a: 111
//   }
// }
// console.log(test()) // console object a

// function test2() {
//   // return 換行會自動加入分號 ;
//   return
//   {
//     b: 222
//   }
// }
// console.log(test2()) // undefined

// 分號的寫作
// 下一行包括以下符號，js不會自動加上分號
// ( , [ , / , + , -

// var a = 1
// if (a === 1) {
//   console.log('ok => a = 1')
// }

// error
// var b = 1
// (function () {
//   console.log('b === 1')
// })()

// == , ===
// console.log(0 == '') // true
// console.log(1 == true) // true
// console.log(2 == true) // false
// console.log(0 == '0') // true
// console.log(false == 'false') // false
// console.log(false == '0') // true
// console.log(' \t\r\n ' == 0) // true

// 統整 == , === 的網站
// http://zero.milosz.ca/

// var a, b
// a = b
// if (a) {
//   console.log(a)
// }

// bad
// var upperCase = 1
// ;(function () {
//   var upperCase = 2
//   console.log(upperCase)
// })()

// function myfunc() {
//   this.x = 100
// }
// var p = myfunc()

// // 建構函式字首大寫
// function MyFunc() {
//   this.x = 100
// }
// var q = new MyFunc()

var i = 5
// console.log(i++)
// console.log(i++)

// function run(i) {
//   return i++
// }
// console.log(run(5))

// if (true) console.log('a')
// console.log('b')

// if (false) console.log('a')
// console.log('b')

// if (true) {
//   console.log('aa')
// }
// console.log('bb')
