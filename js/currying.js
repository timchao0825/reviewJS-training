console.log('curring js init')

// classic
// function cube(width, height, depth) {
//   return height * width * depth
// }

// console.log(cube(10, 10, 10))
// console.log(cube(5, 2, 10))
// console.log(cube(5, 2, 7))
// console.log(cube(5, 2, 6))

// curring
// function cube(width) {
//   return function (height) {
//     return function (depth) {
//       return width * height * depth
//     }
//   }
// }

// console.log(cube(10)(10)(10))

function test(val) {
  console.log(val)
  const testVal = 'test' + val
  return function (callback) {
    callback(testVal)
  }
}
function showResult(result) {
  console.log('The result is: ' + result)
}

const setTestVal = test('123')
setTestVal(showResult)
