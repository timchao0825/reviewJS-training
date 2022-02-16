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

console.log(ary1.sum())
