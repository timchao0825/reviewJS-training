console.log('multiplicationTable js init')
// Example = 7
// 7 * 1 = 7
// 7 * 9 = 63
// 7 * 2 = 14
// 7 * 8 = 56
// 7 * 3 = 21
// 7 * 7 = 49
// 7 * 4 = 28
// 7 * 6 = 42
// 7 * 5 = 35

// target = 19
const target = 7
let startVal = 0
let endVal = 9
for (let i = 1; i <= 9; i++) {
  if (i % 2 === 0) {
    const result = target * endVal

    console.log(`${target} * ${endVal} = ${result}`)

    endVal--
  } else {
    startVal++

    const result = target * startVal

    console.log(`${target} * ${startVal} = ${result}`)
  }
}
