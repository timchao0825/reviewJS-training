console.log('closure js init')

// var a
// function outer(){
//     var b = 100
//     function inner(){
//         console.log(b)
//     }
//     a = inner
// }
// outer()
// a()

// var name = "a";
// var obj = {
//     name: "b",
//     getName: function(){
//         var thisObj = this // b
//         return function() {
//             return thisObj.name
//         }
//     }
// }
// var result = obj.getName()
// console.log(result()) // a

// var add = (function(){
//     var count = 0;
//     return function(){
//         return count += 1;
//     }
// })()
// console.log(add())

// for (var i = 0; i < 5; i++) {
//     setTimeout(function(){
//         console.log(i)
//     }, i * 1000);
// }

// solution 1 = IIFE
// for (var i = 0; i < 5; i++) {
//     (function(i){
//         setTimeout(function(){
//             console.log(i)
//         }, i * 1000);
//     })(i)
// }

// solution 2 = pass value to settimeout
// for (var i = 0; i < 5; i++) {
//     setTimeout(function(i){
//         console.log(i)
//     }, i * 1000 , i);
// }

// solution 3 = bind
// for (var i = 0; i < 5; i++) {
//     setTimeout(function(){
//         console.log(this)
//     }.bind(i), i * 1000);
// }

// solution 4 = es6 let
for (let i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log(i)
    }, i * 1000 );
}