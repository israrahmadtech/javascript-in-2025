// Callback function: Function which is passed as an argument

// function chaiBanGai(callback){
//     console.log('Chai ban gyi')
//     callback()
// }

// // higher order function: Function which take a callback function as an argument or it return a function/object as a parameter
// function chaiBanao(){ // This is callback function which is passed as an argument to a high order function below
//     console.log("I am making chai...")
// }

// chaiBanao(chaiBanGai) // just passing the definition of the function as an argument


// // higher order function 👉 Aise functions jo ek ya zyada functions ko argument ke roop me lete hain ya ek function return karte hain.
function applyFunction(func, value) {
    return func(value);
}
// Callback function
function square(x) {
    return x * x;
}

console.log(applyFunction(square, 5)); // Output: 25

// function multiplyBy(num){
//     return function(value){
//         return num*value
//     }
// }
// const result = multiplyBy(5)
// console.log(result) // [Function (anonymous)]
// console.log(result(5))

// console.dir(result) // scope

// private -> state persist

// closure


// const nums = [1, 2, 3,4 , 5]
// imperative progtamming: step by step
// let squarednumbers = []
// for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     const squaredValue = element * element
//     squarednumbers.push(squaredValue)
// }
// console.log(squarednumbers)

// declarative programming: shortcuts
// function mapCalbback(value)
// const squared = nums.map()

// map

// .............................................................
/*
Callback Function: 
A callback function in JavaScript is a function that is passed as an argument to another function and is executed later, usually after some operation has been completed.

Why Use Callback Functions?
JavaScript is asynchronous, meaning certain tasks (like API calls, file reading, or timers) take time to complete. Instead of blocking execution, JavaScript uses callbacks to handle these operations efficiently.

In Urdu:
Bhai, simple shabdon me callback function wo function hota hai jo kisi doosre function ke andar argument ki tarah pass hota hai aur baad me call hota hai.
Yaane ki ek function doosre function ko bolta hai:
"Bhai, jab tera kaam khatam ho jaye, mujhe bula lena!"
*/
// function meraKam(callback){
//     'Mera kam Chaloo hai, batha dunga jab hojae'
//     return callback()
// }
// function kamHoGaya(){ // kamHoGaya is a callback function which will be passed as a parameter to a Higher Order Function(meraKam)
//     return 'Mera kam Hogaya, ab thu kr le apna kam'
// }
// const result = meraKam(kamHoGaya)
// console.log(result)


// function outerFunction() {
//     let count = 0; // Parent function ka variable

//     function innerFunction() { 
//         count++; // Inner function outer variable ko use kar raha hai
//         console.log(count);
//     }

//     return innerFunction; // Inner function ko return kar diya
// }

// const myClosure = outerFunction(); // outerFunction execute hoke innerFunction return karega
// myClosure(); // Output: 1
// myClosure(); // Output: 2
// myClosure(); // Output: 3

// console.log(outerFunction(innerFunction));
    // Yaha problem yeh hai ki tum outerFunction(innerFunction) likh rahe ho.
    // Lekin outerFunction() koi argument accept nahi karta.
    // outerFunction() sirf innerFunction ko return karta hai, use koi input chahiye hi nahi!
    // Isiliye yeh error dega:

// ....................
// function once(anotherFunction){
//     let done = false
//     return function(){
//         if(!done){
//             done = true
//             return anotherFunction()
//         } else{
//             console.log('Already Executed')
//         }
//     }
// }
// // function sayHello(){
// //     console.log('Hello from Callback')
// // }
// const result = once(() => console.log("Hello, World!"));
// result()
// result()
// result()
// result()

// // ........................  Problem  .................
// function once(fn) {
//     let done = false; // Yeh private variable hai

//     return function () {
//         if (!done) {
//             done = true;
//             return fn();
//         } else {
//             console.log("Already Executed!");
//         }
//     };
// }

// const sayHello = once(() => console.log("Hello, World!"));

// sayHello(); // Output: Hello, World!
// sayHello(); // Output: Already Executed!
// sayHello(); // Output: Already Executed!
// Yahaan har call pe count reset ho raha hai, kyunki closure nahi bana.
