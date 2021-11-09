console.log('type js init')
// ----
// basic type
// ----
var str = 'string'
// console.log(str)
// console.log(typeof str)

// str.val = 100
// console.log(str.val)

// var objStr = new String('obj string')
// console.log('obj.str ==>', typeof objStr)
// console.log(objStr + 3)
// objStr.val = 100
// console.log('obj.str value ==>', objStr.valueOf())

// ----
// undefined null
// ----
// var empty
// console.log(empty)
// console.log(typeof empty)
// var testNull = null
// console.log(testNull)
// console.log(typeof testNull) // object

// // test
// console.log(undefined == null)
// console.log(undefined === null)

// ----
// truthy falsy
// ----
console.group('Boolean console')
console.log(Boolean()) // false
console.log(Boolean(0)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.groupEnd() // false
// ! true to false , false to true
// !! = Boolean()
console.group('!! console falsy')
console.log(' Boolean "" ',Boolean(""))
console.log(' !!"" ',!!"")
console.log(' !!0 ',!!0)
console.log(' !!null ',!!null)
console.log(' !!undefined ',!!undefined)
console.log(' !!NaN ',!!NaN)
console.groupEnd()

console.group('!! console truthy')
console.log(' !! "false" ' , !!"false")
console.log(' !!1 ', !!1)
console.log(' !!{} ', !!{})
console.log(' !![] ', !![])
console.groupEnd()