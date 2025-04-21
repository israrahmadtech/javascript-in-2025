const list = document.querySelectorAll('li:nth-child(even)') // target all even li elements

// list[2]  select element on index 2


const greet = name => "Hello, " + name;
const multiply = (x, y) => x * y;

setTimeout(() => console.log('Times up!'), 1000);


// const student = {
//     name: 'Ali',
//     sayHi : function(){
//         setTimeout(function(){
//             console.log(this.name)
//         }, 2000)
//     }
// }

// console.log(student.sayHi())
// ❌ Output:  undefined

// Kyun?
// Kyuki setTimeout ke andar ka function apna khud ka this context use karta hai — jo by default window (browser me) ya undefined (strict mode me) hota hai.
// Toh this.name actually window.name ban jata hai, jo mostly undefined hota hai.


const student = {
    name: 'Ali',
    sayHi: function () {
        setTimeout(() => {
            console.log(this.name); // Arrow function captures outer this
        }, 2000);
    }
};

student.sayHi(); // Output after 2s: Ali ✅



const dataArray = [1, 2, 0, null, "hello",, undefined, 3, null, 4, false]
// get just truthy values
const truthyValues = dataArray.filter((value) => {
    if(value){
        return value
    }
})
console.log(truthyValues)


// const dataArray = [1, 2, 0, null, "hello", , undefined, 3, null, 4, false];
// const truthyValues = dataArray.filter(value => Boolean(value));
// console.log(truthyValues);


// const dataArray = [1, 2, 0, null, "hello", , undefined, 3, null, 4, false];
// const truthyValues = dataArray.filter(Boolean);
// console.log(truthyValues);


// const dataArray = [1, 2, 0, null, "hello", undefined, 3, null, 4, false];
// const truthyValues = dataArray.filter(value => value);
// console.log(truthyValues);


// Function as expression
const storeFunc = function(name){
    return 'Hello, ', name
}

// implicit return
const arrowFunc = name => "Hello, " + name;

// Don't use Arrow function:
// inside the object directly
// constructor function


