
// 📌 1️⃣ Normal Object (Without Constructor)
// const person = {
//     name: "Ali",
//     age: 25,
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         // this means current context
//         console.log(this) // { name: 'Ali', age: 25, sayHello: [Function: sayHello] }
//         console.log(person) // { name: 'Ali', age: 25, sayHello: [Function: sayHello] }
//     }
// };

// console.log(person.name);  // Output: Ali
// person.sayHello();         // Output: Hello, my name is Ali and I am 25 years old.

// ✔ Yeh ek simple object hai, lekin yeh constructor use nahi kar raha!

// .................... 
function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// 🚀 4️⃣ Object Constructor Ka Real-Life Example (Car Factory)
// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     start() {
//         console.log(`${this.brand} ${this.model} is starting...`);
//     }
// }

// const car1 = new Car("Toyota", "Corolla", 2022); // new return an empty object
// means that:
// car1 = {
//     brand: 'toyota',
//     model: 'Corolla',
//     year: '2022'
// }
// const car2 = new Car("Honda", "Civic", 2023);

// console.log(car1.brand);  // Output: Toyota
// console.log(car1);  // Output: Toyota
// // car1.start();             // Output: Toyota Corolla is starting...

// console.log(car2.brand);  // Output: Honda
// // car2.start();             // Output: Honda Civic is starting...

// console.log(car1)
// console.log(car2)

// .................................................
// Constructor Function Kya Hai?
// Constructor function ek normal function hota hai jo new keyword k sath call karne par ek object return karta hai.
// Constructor Function Banane Ka Tarika

// Ek function bana kar usko capital letter se start karte hain (ye convention hai, zaroori nahi). Fir this keyword ka use karte hain properties set karne ke liye.
// Example:
// function Car(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }

// // Ab ek new object banate hain
// let myCar = new Car("Toyota", "Corolla", 2022); // { brand: 'Toyota', model: 'Corolla', year: 2022 } ye object Car(constructor function) ne return kr diya

// console.log(myCar);

// Samjh aya kya ho raha hai?
//     Car ek constructor function hai.
//     Jab new Car("Toyota", "Corolla", 2022) likha, to ek naya object bana.
//     this.brand = brand; ye new object me property set kar raha hai. Matlab jo object return huva, usi me properties set kr rha hai


// Methods Bhi Add Kar Sakte Hain
// Agar kisi constructor function me method (function) add karna ho to simple this.methodName = function() {} use kar sakte hain.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.sayHello = function() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     };
// }
// const israr = new Person('israr', '18') // { name: 'israr', age: '18', sayHello: [Function (anonymous)] } ye object israr variable me store hogya jo k Person(constructor function) ne return kya tha.
// Constructor function Person ek new object bana raha hai.
// Properties (name, age) aur method (sayHello), object me add ho rahi hain.
// sayHello() function ab return kar raha hai string ko.
// console.log(israr.sayHello()) ab bilkul theek print karega.

// console.log(israr.sayHello()) // Hello, my name is israr and I am 18 years old.

