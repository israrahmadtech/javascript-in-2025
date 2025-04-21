// Template literals (also called template strings) JavaScript ka ek modern feature hai (introduced in ES6) jo hume multi-line strings aur string interpolation (variable ya expression insert karna) ko easy banata hai.
// 🔹 Basic Syntax:

// `This is a template literal`
// ⚠️ Notice: Backticks (`) use hote hain, not quotes (' ' ya " ").



const firstName = 'Israr'
const lastName = 'Ahmad'

console.log(`Your first name is ${firstName} and your last name is ${lastName}`)

// You can't do
// console.log("Israr              
//     Ahmad")

// You can do
console.log(`Israr              
    Ahmad`)



// Task : Data Entry App,
// Create  
// data should be enter by user,
// store the data iin a object,
// push that object in an array
// render the whole array into html

let id = 0
const form = ""
form.addEventListner("submit", function(){
    ++id;
    const obj = {
        id: id,
    }
    Array.push(obj)
})

