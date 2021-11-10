console.log('function js init')

console.group('first function')
function firstFunction(width , height){
    
    console.log('width => ' , width);
    console.log('height => ' , height)
    
}
firstFunction(10 , 20)
console.groupEnd()

console.group('arguments function')
function Arguments(){
    const first = arguments[0]
    const second = arguments[1]
    const third = arguments[2]
    const length = arguments.length
    console.log(first , second , third , length)
    
}
Arguments(10 , 20 , 30)
console.groupEnd()

console.group('Arg Loop function')
function ArgLoop(){
    
    let arr = []
    for (let i = 0; i < arguments.length; i++) {
        let argValue = arguments[i]
        arr.push(argValue)
    }
    arr.forEach(el => {
        console.log('arr value => ' , el)
    });
    
}
ArgLoop(1 , 3 , 5 , 7, 9)
console.groupEnd()


console.group('IIFE console.log')
let a = 100;
(function(){
    const b = true;
    var c = true;
    console.log('a => ' , a)
})()
// console.log(b) // error: b is not undefined
// console.log(c) // error: c is not undefined
console.groupEnd()

console.group('IIFE pass value')
// (function(){
//     window.onerror = function(){
//         console.log('error')
//     }
//     document.querySelector('body').addEventListener('click',function(){
//         console.log('click')
//     })
// })()
// no pass value to IIFE
// window.onerror=function(){console.log("error")},document.querySelector("body").addEventListener("click",function(){console.log("click")});

// (function(window , document){
//     window.onerror = function(){
//         console.log('error')
//     }
//     document.querySelector('body').addEventListener('click',function(){
//         console.log('click')
//     })
// })(window, document)

// pass value ot IIFE
// !function(o,n){o.onerror=function(){console.log("error")},n.querySelector("body").addEventListener("click",function(){console.log("click")})}(window,document);

console.groupEnd()