
// Hoisting

// console.log(a) // undefined
// var a = 10
// console.log(a)

// console.log(a) // ReferenceError: a is not defined
// a = 10
// console.log(a)

// b()
// function b(){
//     console.log('b')
// }

// var c = 10
// console.log(c)
// if(true){
//     var c = 20 // var will have global scope
//     console.log(c) // 20
// }
// console.log(c) // 20

// var will have local scope only inside function
// var d = 10
// function func(){
//     var d = 20
//     console.log(d) // 20
// }
// func()
// console.log(d) // 10


// ...............   let  ................
// console.log(a) // ReferenceError: Cannot access 'a' before initialization
let a = 10
console.log(a) // 10
a = 20
console.log(a) // 20


let c = 10
console.log(c) // 10
if(true){
    let c = 20
    console.log(c) // 20
}
console.log(c) // 10

let x = 10
// let x = 20 // let cannot be redeclared


// let will have local scope inside function
let d = 10
function func(){
    let d = 20
    console.log(d) // 20
}
func()
console.log(d) // 10

let nums = [1, 2, 3, 4, 5]
nums = []; // allowed
console.log(nums)
nums[0] = 'hey' // allowed
console.log(nums)

// ............  const  ..................
// const g; // can't be declared, must be initialized
const b = 'israr'
console.log(b)
// f = 'ahmad' // connot be re initialize


// const nums = [1, 2, 3, 4, 5]
// // nums = []; // not allowed
// // console.log(nums)
// nums[0] = 'hey' // allowed
// console.log(nums)