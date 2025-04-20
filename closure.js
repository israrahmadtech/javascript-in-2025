/*
📌 Closures Kya Hota Hai?

Closure ek function hota hai jo apne parent function ke variables ko yaad rakhta hai, chahe parent function execute ho chuka ho.

Matlab jab ek function doosre function ke andar hota hai aur andar wala function bahar wale function ke variables ko access kar sakta hai, to use closure kehte hain.
*/

// function outerFunction() {
//     let count = 0;  // ✅ Ye variable yaad rahega closure me

//     function innerFunction() {
//         count++;  // ✅ innerFunction `count` ko use kar sakta hai
//         console.log(count);
//     }

//     return innerFunction;  // ✅ innerFunction return ho raha hai
// }

// const counter = outerFunction();  // ✅ outerFunction execute ho gaya

// counter();  // Output: 1
// counter();  // Output: 2
// counter();  // Output: 3

// 🔥 Yeh Kaise Kaam Kar Raha Hai?
//     outerFunction() execute hota hai aur count variable create hota hai.
//     innerFunction() ko return kar diya jata hai.
//     Jab counter() call hota hai, to innerFunction abhi bhi count ko access kar sakta hai, kyunki closure ne count ko yaad rakh liya hai.


// 🔍 Closure Ki Power
// Agar closures nahi hote, to count har baar reset ho jata. Lekin closures ki wajah se count ki value retain ho rahi hai! 🎯


// .....................  Problem  ........................

// ✅ Closure Without Return
// function outerFunction() {
//     let count = 0;

//     function innerFunction() {
//         count++;
//         console.log(count);
//     }

//     innerFunction();
// }

// outerFunction();  // Output: 1
// outerFunction();  // Output: 1  (Dobara call pe wapas 1 se shuru)


// 2️⃣ Event Listeners Me Closure
// function attachEventListener() {
//     let count = 0;

//     document.getElementById("btn").addEventListener("click", function () {
//         count++;
//         console.log("Button clicked", count, "times");
//     });
// }

// attachEventListener(); 


// 🚀 Real-World Example: Bank Account (Encapsulation using Closures)
// function createBankAccount(initialBalance) {
//     let balance = initialBalance;  // ✅ Yeh private variable closure me store hoga

//     return {
//         deposit: function (amount) {
//             balance += amount;
//             console.log(`Deposited: $${amount}, New Balance: $${balance}`);
//         },
//         withdraw: function (amount) {
//             if (amount > balance) {
//                 console.log("Insufficient funds!");
//             } else {
//                 balance -= amount;
//                 console.log(`Withdrawn: $${amount}, Remaining Balance: $${balance}`);
//             }
//         },
//         checkBalance: function () {
//             console.log(`Current Balance: $${balance}`);
//         }
//     };
// }

// const myAccount = createBankAccount(1000);  // ✅ Pehle $1000 deposit

// myAccount.checkBalance();  // Output: Current Balance: $1000
// myAccount.deposit(500);    // Output: Deposited: $500, New Balance: $1500
// myAccount.withdraw(200);   // Output: Withdrawn: $200, Remaining Balance: $1300
// myAccount.withdraw(2000);  // Output: Insufficient funds!
// myAccount.checkBalance();  // Output: Current Balance: $1300


// 💡 Practical Use Cases of Closures
// 1️⃣ Data Encapsulation (Private Variables)
// function createCounter() {
//     let count = 0;

//     return {
//         increment: function () {
//             count++;
//             console.log(count);
//         },
//         decrement: function () {
//             count--;
//             console.log(count);
//         }
//     };
// }
// // console.log(createCounter())
// const counter = createCounter();
// counter.increment();  // Output: 1
// counter.increment();  // Output: 2
// counter.decrement();  // Output: 2

// ⚡ Yeh private counter bana diya, jo directly access nahi ho sakta!


// ............................................................................................
// Lexical Environment — Yeh kya hota hai?
// 🔤 Definition:
// Lexical Environment ka matlab hota hai:
//     "Jab JavaScript engine kisi function ko run karta hai, to wo us function ke andar ke variables aur us function ke bahar ke variables jo us waqt available hain, dono ka ek environment bana leta hai."

// 🤔 Iska matlab?
// Jab bhi koi function banta hai, us waqt wo function kis jagah bana tha, us jagah ke variables uske sath chipak jate hain — isay hi lexical (jagah ke hisaab se) kehna hai.


// function outer() {
//     let name = "Israr";

//     function inner() {
//         console.log("Hello", name); // name is from outer()
//     }

//     inner();
// }

// outer();
// 🧠 Explanation:
//     inner() function outer function ke variables ko access kar raha hai.

//     Kyunki inner() bana tha outer() ke andar — to name uska lexical parent hai.

//     Yehi lexical environment hai!


// Closure — Ab aata hai asli magic
// 📌 Definition:
//     Jab bhi koi function apne parent scope ke variables ko yaad rakhta hai, even after parent function has finished, to us function ko closure kehte hain.

function outer() {
    let counter = 0;

    return function inner() {
        counter++;
        console.log("Counter:", counter);
    }
}

const inc = outer(); // outer() run hua, aur inner() return ho gaya

// inc(); // Counter: 1
// inc(); // Counter: 2
// inc(); // Counter: 3

// 🤯 Kya ho raha hai yahan?
//     outer() sirf ek dafa chala — usne counter banaya
//     inner() return ho gaya
//     Lekin jab outer() khatam bhi ho gaya, tab bhi counter zinda raha
//     inner() ne us variable ko yaad rakha — this is closure!


// outer() function khatam ho gaya tha — to counter variable ko inner() kaise access kar pa raha hai?
// Agar hum outer() ko baar baar call karein to kya hoga?

const a = outer();
const b = outer();
a(); b(); a();

