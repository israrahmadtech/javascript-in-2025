
// function popup() {
//     alert("a is hovered")
// }


// Counter: 
// let count = 0
// let counter = document.querySelector('.counter')
// function increment() {
//     counter.innerHTML = ++count
// }
// function decrement() {
//     counter.innerHTML = --count
// }


// function changeColor(style) {
//     style.style.color = 'blue'
// }


/*
onClick
onMouseover , leave , out, 
onChange
onblur
onfocus
*/

// Task : Make a to-do list app

// Chapter : 50

// console.log(window)
// console.log(document)

// DOM Manipulation


// Study : this keyword


// Task : Form Handling
// Task : setting city name according to country name 

// Adding HTML in DOM using innerText, textContent, innerHTML


// element.className = 'hidden' // this will override all other classes
// element.className += ' hidden' // do this instead



// const studentH1 = document.getElementById('studentH1')


// const students = [
//     { id: 1, name: 'Osama' },
//     { id: 2, name: 'abdullah' },
//     { id: 3, name: 'ismail' },
//     { id: 4, name: 'idrees' },
//     { id: 5, name: 'usman' },
//     { id: 6, name: 'rizwan' },
//     { id: 7, name: 'huzaifa' },
//     { id: 8, name: 'ali' },
//     { id: 9, name: 'haris' },
//     { id: 10, name: 'nabeel' },
// ]
// function addData() {
//     let studentId = document.getElementById('studentId')
//     // studentId = Number(studentId)

//     for (let i = 0; i < students.length; i++) {
//         if (students[i].id == studentId.value) {
//             studentH1.innerText = students[i].name
//         }
//     }
// }

// looping can be done using .find()

// function addData() {
//     const studentH1 = document.getElementById('studentH1')
//     let studentId = document.getElementById('studentId')

//     const foundStudent = students.find(function (student) {
//         if (student.id == studentId.value) {
//             return true
//         } else {
//             return false
//         }
//     })

//     if (foundStudent) {
//         studentH1.innerText = foundStudent.name
//     } else{
//         studentH1.innerText = 'Not Found'
//     }
// }


// 56 ---  57 page
