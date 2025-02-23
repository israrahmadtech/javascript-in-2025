
// Modulus: Used to get the remainder but 1st number must be greater than second
// console.log(10 % 5) // Output: 0 --> Remainder
// console.log(5 % 10) // Output: 5 --> return 1st number if first number is less than 2nd


// var numOne = +prompt('Enter a number')
// console.log(numOne % 2) // even if 0, odd if 1 or greater
// if(numOne % 2 == 0){
//     document.write('Number is Even')
// }
// else{
//     document.write('Number is Odd')
// }

var v = 2;
// console.log(--v + ++v - v++ + v--) 
// 1 + 2 - 2 + 3
// v++
// console.log(++v)
// console.log(v)
// Value will be changed and stored although it is in console or not


// var value = 2;
// value += 4; // 6
// value %= 4;// 6 % 4 === 2
// console.log(value)

// var username = prompt('Enter your name', "default value")
// console.log(username)


// Logical operators:
// &&  AND  :  Both conditions must be true
// ||  OR   : One condition must be true
// !  NOT   : return Reverse of the output

// &&
// console.log(10 === 10 && "10" === "10") // true && true   --> true
// console.log(10 == 10 && "10" == "10")    // true && true  --> true
// console.log(10 == 10 && "10" == 10)    // true && true    --> true
// console.log(10 == 10 && "10" === 10)    // true && false  --> false
// console.log(10 === 10 && "10" === 10)    // true && false --> false

// ||
// console.log(10 === 10 || "10" === "10") // true || true    --> true
// console.log(10 == 10 || "10" == "10")    // true || true   --> true
// console.log(10 == 10 || "10" == 10)    // true || true     --> true
// console.log(10 == 10 || "10" === 10)    // true || false   --> true
// console.log(10 === 10 || "10" === 10)    // true || false  --> true
// console.log(10 === "10" || "10" === 10)    // false || false  --> false
// console.log(10 === "10" || "10" == 10)    // false || true  --> true

// !
// console.log(!10)  //  false
// console.log(!0)  //  true
// console.log(!"")  //  true
// console.log(!undefined)  //  true
// console.log(!null)  //  true
// console.log(!NaN)  //  true
