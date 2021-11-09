console.log('console method js init')

// const user = { name: '' }
// if (!user.name) {
//   console.log('no user name ==> ', user)
// }
// ignore if else
// only user.name false will print log
// console.assert(user.name, 'console assert no user name ==> ', user)
// console count
// function count(arg) {
//   console.count(arg)
// }
// count('foo')
// count('bar')
// count('bar')

const obj = {
  test: 1,
  test2: 2
}
// original log
// console.log('---------')
// console.log(obj)
// console.log('---end---')

console.group('log & group')
console.group('Start debugging')
console.log('de-')
console.group('Nested')
console.warn('deeper message')
console.groupEnd()
console.log('bug')
console.groupEnd()
console.groupEnd()

const rows = [
  {
    name: 'Frozen yoghurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6
  }
]
// original console
console.group('log & table')
console.log(rows)

console.table(rows)
console.table(rows, ['name', 'fat'])
console.groupEnd()

// console trace
function aa() {
  console.log('aa')
  console.trace()
}
function a() {
  aa()
  console.trace()
}
function b() {
  a()
}
function c() {
  b()
}
b()
// c()
