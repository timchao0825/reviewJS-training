console.log('this js init')

var arr = [1,2,3]
arr.a = 10;
arr.show = function(){
    console.log(this.a)
}
arr.show()
