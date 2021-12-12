console.log('hoisting js init')

var x = 5;

// (function(){
//     // hoisting  =? var x
//     // var x = not defined value
//     console.log(x) // undefined
//     var x = 10;
// })()
// console.log(x)

// testing
var a = 1;
function hoisting(){
    // answer 
    // var a // undefined
    if(!a){ // !undefined = true
        var a = 2; // a = 2
    }
    console.log(a) // ?
}
hoisting() 
