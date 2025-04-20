// Prototype Kya Hota Hai?
// JavaScript ek object-based language hai, aur prototype iska aik powerful feature hai. Har object JavaScript me aik prototype se linked hota hai, jo us object ke liye default properties aur methods provide karta hai.

// let person = {
//     name: "Israr",
//     greet: function() {
//         console.log("Hello! My name is " + this.name);
//     }
// };
// person.greet(); // Output: Hello! My name is Israr
// Yeh aik simple object hai, jo name aur greet method rakhta hai. Lekin JavaScript ka har object aik prototype chain se linked hota hai.

// Check karne ke liye:
// console.log(person.__proto__);  // Object ka prototype dikhay ga

// Prototype Chain
// Jab bhi tum kisi property ya method ko call karte ho, JavaScript pehlay us object ke andar dhoondti hai. Agar wahan na mile, to prototype chain follow karti hai.

// 💡 Example:
// console.log(person.toString()); 
// Tumne toString() function call kiya, lekin person object me yeh method nahi hai. JavaScript prototype chain me Object ke prototype (Object.prototype) tak jaye gi aur wahan se toString() method use karegi.

// Function Prototype
// Har function ke saath aik prototype object hota hai, jisme tum naye properties aur methods add kar sakte ho.

// 💡 Example:
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.sayHello = function() {
//     console.log("Hello, my name is " + this.name);
// };

// let student1 = new Student("Ali", 20);
// let student2 = new Student("Sara", 22);

// student1.sayHello(); // Output: Hello, my name is Ali
// student2.sayHello(); // Output: Hello, my name is Sara

//  Yahan Student.prototype me sayHello method add kiya gaya hai. Ab jitne bhi objects Student constructor se banenge, wo yeh method inherit karenge bina extra memory consume kiye.


// Prototype Inheritance (Ek Object Se Dusre Ko Inherit Karna)
// Agar tum chaho ke aik object dusre se properties inherit kare, to Object.create() ka use kar sakte ho.

// 💡 Example:
// let animal = {
//     makeSound: function() {
//         console.log("Some sound...");
//     }
// };

// let dog = Object.create(animal); // dog ka prototype animal hai
// dog.bark = function() {
//     console.log("Woof woof!");
// };

// dog.makeSound(); // Output: Some sound...
// dog.bark();      // Output: Woof woof!

// .... Lets explain this code
// Step 1: animal Object Create Karna

let animal = {
    makeSound: function() {
        console.log("Some sound...");
        // return null
    }
};
// Yahan ek object animal bana hai jisme aik method makeSound() hai.
// Yeh method jab call hoga to "Some sound..." print karega.

// Step 2: dog Object animal Se Inherit Karna
let dog = Object.create(animal);

// Object.create(animal) ka matlab hai ke ek naya object dog banayenge jo animal ka prototype inherit karega.
// Iska matlab, agar dog ke andar koi property/method nahi milega, to JavaScript animal ke andar dhoonday gi.

// Step 3: dog Object Me Apni Property Add Karna

dog.bark = function() {
    console.log("Woof woof!");
};

// Yahan dog object me ek naya method bark() add kiya hai jo "Woof woof!" print karega.
// Yeh method sirf dog object me available hoga, animal me nahi.

// Step 4: Debugging Using console.log()

// Ab hum dekhte hain ke dog object ka structure kaisa hai:

console.log(dog);

// Output: { bark: [Function (anonymous)] }

// Tum sochoge ke makeSound() method kaha gaya?
// Yeh dog ke andar nahi hai, lekin prototype me hai!
// Prototype ko check karne ke liye console.log(dog.__proto__) use karte hain:

console.log(dog.__proto__);

// Output: { makeSound: [Function: makeSound] }
// 🟢 Yeh animal object hai jo dog ka prototype hai.


// Step 6: More Debugging (Object Structure Check)

console.log(Object.getPrototypeOf(dog) === animal); // Output: true
// Yeh confirm karega ke dog ka prototype animal hai.

console.log(dog.hasOwnProperty("makeSound")); // Output: false
// Kyunki makeSound() dog me nahi hai, balke prototype se inherit ho raha hai, isliye false return karega.

console.log(dog.hasOwnProperty("bark")); // Output: true
// Kyunki bark() method directly dog ke andar define hai, isliye true return karega.

// Final Thoughts
// Object.create(animal) ne dog ka prototype animal set kar diya.
// dog.makeSound() ne animal ke method ko inherit kiya.
// dog.bark() dog me hi define tha, isliye direct execute hua.
// Prototype chain ke zariye JavaScript automatically properties aur methods parent object se child object tak search karti hai.


// console.log(animal.dog) // undefined: cause dog is not a property of animal, It have just imported the default properties and methods of animal by making the animal object its prototype
// So dog object have access of all the properties and methods animal have
// e.g
console.log(dog.makeSound())
