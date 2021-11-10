console.log('try catch js init')

console.group('try catch log')
function tryCatch (){
    try {
        console.log(a) // not define a will be error
    } catch (error) {
        console.log(error.message) // then print this
    }
}
tryCatch()
console.groupEnd()

console.group('try finally log')
function tryFinally(){
    try{
        return 'abc';
    }finally{
        console.log('xyz')
    }
}
console.log(tryFinally())
console.groupEnd()

console.group('try finally return log')
function tryFinallyReturn(){
    try{
        return 'abc';
    }finally{
        return 'xyz'
    }
}
console.log(tryFinallyReturn())
console.groupEnd()