// Conparison Operators:

// ==  Compare the values 
// === compare the value and check data type
// > greater than
// < less than
// >= greater or equal to
// <= less or equal to
// >== greater or equal to + check data type
// <== less or equal to + check data type


var a = 10;
var b = "10";

console.log(a == a) // true 
console.log(a === a) // true 
console.log(a == b) // true 
console.log(a === b) // false
b = "10a"
console.log(a == b) // false
console.log(true == '') // false
console.log(false == '') // true
console.log(true == 1) // true
console.log(true == 0) // false
console.log(false == 1) // false
console.log(false == 0) // true

console.log(10 > 10) // false
console.log(10 >= 10) // true
console.log(10 >= 9) // true
console.log(10 >= 11) // false

console.log(10 >= "9a") // false


console.log(10 >= Infinity) // false
console.log(10 >= -Infinity) // true

var c = true;
// ! Not Operator
console.log(!true) // false
console.log(!false) // true

// ""  == false

var empty = ""
console.log(!empty) // true

// Falsy Values / Falsy data types:
// 0
// ""
// false
// null
// undefined
// NaN

console.log(BigInt(""))     // 0n
console.log(BigInt(0))      // 0n
console.log(BigInt(false))  // 0n

console.log(10 !== '10') // true
console.log(10 !== 10)  // false
console.log(10 != 10)   // false
console.log(10 != '10')  // false