
// Object : Object is an real life intity having some properties
// Object is a data structure in which the data is stored in key value pair form

// const student = ['ali', 20, '30-05-2002'] // the data inside this array is unknown for a normal person, means it is difficult to know what the data is for, what is 20, what is the date mentioned

// Object are designed to solve this problem

const student = {
    name: 'israr',
    age: 18,
    'my subject': 'js'
}
console.log(student) // the data inside object is not sorted/unordered because the data will be accessed using keys
console.log(student.name)
console.log(student["age"])

// console.log(student.my subject) // invalid : cannot be access
console.log(student["my subject"]) // valid : can be acces

const student2 = {
    name: 'israr',
    age: 18,
    'my subject': 'js',
    isStudent: true,
    isEnroll: false,
    address: ['karachi', 'peshawar'],
    phone: ['12334567', '87654332'],
    stipend: 500,
    currency: "USD",
    subjects: {
        english: 70,
        math: 90
    },
    greet: function () { // Anonimous dunction
        console.log('hello israr')
    }
}

console.log(student2.address[0])
console.log(student2.address[1])

console.log(student2.subjects.english)

// changing a value
student2.isEnroll = true;
console.log(student2.isEnroll)

student2.address[0] = 'lahore'
console.log(student2.address[0])

// adding new property
student2.subjects.html = 100
console.log(student2.subjects.html)

// function calling
student2.greet()


const student3 = {
    name: 'israr', // commas seperated values
    fname: 'Azmat',
    cnic: '89423710',
    course: 'web',
    batch: 3,
}

// array of objects
const students = [
    student, student2, student3
]
console.log(students[1].isEnroll)

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name)

    if (students[i].isStudent === false) {
        console.log('Pakra Gaya')
    } else if (students[i].isStudent === true) {
        console.log('Bach Gaya')
    }
}

// Objects are also pass byByReference
const student5 = {
    name: 'israr',
    age: 18,
    'my subject': 'js'
}
const student5Copy = student5;
student5Copy.age = 20
console.log(student5.age)     // 20
console.log(student5Copy.age) // 20


// Deep coly of an object : Creating a deep copy of an object means creating a new object that copies not just the object itself, but also all of the objects that it contains, recursively. This ensures that the copied object and the original object are entirely independent.

// How to Create Deep copy of an object
// Using JSON.parse() and JSON.stringify() (Simple Objects)

// This method is useful for deep copying simple objects that do not contain functions, undefined, RegExp, or other complex types (e.g., Date, Map, Set). It works by serializing the object to a JSON string and then parsing it back into a new object.

const original = {
    a: 1,
    b: { c: 2 },
    d: [3, 4],
};

const deepCopy = JSON.parse(JSON.stringify(original));

// Modify the original object
original.b.c = 3;
original.d[0] = 5;

console.log(original);  // { a: 1, b: { c: 3 }, d: [5, 4] }
console.log(deepCopy);   // { a: 1, b: { c: 2 }, d: [3, 4] }

// Pros: Simple and works well for basic objects.
// Cons: Does not handle non-JSON-safe values like Date, undefined, or circular references. It also loses methods.