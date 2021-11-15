console.log('scope chain js init')

// var a = 1;
// (function(){
//     var a = 100;
//     console.log('a => ', a) // 100
// })()
// console.log('a => ', a) // 1

// var b = 2;
// (function(){
//     b = 3;
//     console.log('b => ', b) // 3
// })()
// console.log('b => ', b) // 3

// var c = 4;
// (function(c){
//     c = 100
//     console.log(c) // 100
// })(c)
// console.log(c) // 4

var d = 4;
function test(d){
    d = 100
    console.log(d) // 100
}
test(d)
console.log(d) // 4