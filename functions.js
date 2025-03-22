
// Regular Function: that one function having a 'function' keyword
// function calculator(numOne, numTwo, operator){
//     if(operator === '+'){
//         return numOne + numTwo
//     }
//     else if(operator === '-'){
//         return numOne - numTwo
//     }
//     else if(operator === '*'){
//         return numOne * numTwo
//     }
//     else if(operator === '/'){
//         return numOne / numTwo
//     }
//     else if(operator === '%'){
//         return numOne % numTwo
//     }
//     else{
//         console.log("Please enter a valid operator")
//     }
// }
// console.log("Addition: " + calculator(10, 10, '+'))
// console.log("Subtraction: " + calculator(10, 10, '-'))
// console.log("Multiplication: " + calculator(10, 10, '*'))
// console.log("Division: " + calculator(10, 10, '/'))
// console.log("Modulus: " + calculator(10, 10, '%'))
// calculator(10, 10, '&')

// bmi calculator

// ********  unit conversion calculator
// var centimeters = +prompt("Enter the length in centimeters")
// var unit = prompt("Enter the unit as: mm, m, km")
// function unitConverter(centimeters, unit){
//     if(unit === 'mm'){
//         document.write("Millimeters: ", centimeters / 10)
//     }
//     else if(unit === 'm'){
//         document.write("Meters: ", centimeters / 100)
//     }
//     else if(unit === 'km'){
//         document.write("Kilometers: ", centimeters / 1000)
//     } 
//     else{
//         document.write("Please write the  corret unit")
//     }
// }
// unitConverter(centimeters, unit)


// Ticket
// var gender = prompt("Enter your gender")
// var age = +prompt("Enter your age")
// var budget = +prompt("Enter your budget")
// function tickets(gender, age, budget){
//     if(gender === 'male'){
//         if(age > 18){
//             if(budget > 10000){
//                 return document.write("Here is your ticket Sir")
//             }
//         }
//     }
//     if(gender === 'male'){
//         if(age > 18){
//             if(budget > 10000){
//                 return document.write("Here is your ticket Sir")
//             }
//         }
//     }
// }
// tickets(gender, age, budget)


// function dexlaration
// function greet(){
//     console.log('Gello Bro')
// }
// greet()

// const text = ' ye mera area hai'
// function greet(username){
//    return 'Gello Bro ' + username + text
// }
// let message = greet('israr')

// console.log(message)


// Function Declaration (Hoisting supported)
// greet() // can be called
// function greet() {
//     console.log("Hello, Bhai!");
// }

// Function Expression (Hoisting nahi hoti)
// greet2() // ReferenceError: Cannot access 'greet2' before initialization
// const greet2 = function() {
//     console.log("Hello, Bhai 2!");
// };

// Function Declaration ko tum pehle bhi call kar sakte ho (kyunki hoisting hoti hai).
// Function Expression me hoisting nahi hoti, isliye function ko pehle declare karna padta hai.

/*
Bhai, hoisting JavaScript ka ek concept hai jisme variables aur functions ko execution se pehle memory me upar le jaya jata hai. Matlab JavaScript code execute karne se pehle sabhi function declarations aur variable declarations ko memory me reserve kar leti hai.

Hoisting Ki Simple Definition:
"JavaScript automatically moves function declarations and variable declarations to the top of their scope before executing the code."

*****  Temporal Dead Zone  *****
Bhai, Temporal Dead Zone (TDZ) ek time period hota hai jisme JavaScript variables exist to karte hain, lekin unko access nahi kar sakte. Agar tum TDZ ke andar variable ko access karne ki koshish karoge, to ReferenceError milega.
🚀 Temporal Dead Zone Ki Definition

"TDZ wo time period hai jab tak ek variable declare hone ke baad initialize nahi hota. Agar is period me variable ko access karne ki koshish karoge, to ReferenceError aayega."

Yeh sirf let aur const ke saath hota hai, var ke saath nahi hota.
*/
let a
console.log(a)