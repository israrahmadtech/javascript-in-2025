
// for(initialization; condition; updation){
//     code
// }

// initialization: From where to start the loop
// condition: How much times the loop should iterate
// update: increment or decrement in the initialized variable

// const tableNumber = 5
// const tableLength = 10
// for(let i = 0; i <= 10; i++){
//     console.log("2 x " + i)
// }


const fruits = ["mango", "kabop", "orange", "strawberry", "peach", "banana", "cherry"]

// for(let i = 0; i < fruits.length; i++){
//     console.log(i, fruits[i])
// }

// for(let i = 0; i < fruits.length; i++){
//     if(fruits[i] === 'peach'){
//         continue   // Whenever compiler here, the loop terminate and skips the below code
//         console.log('milgaya')
//         // break // whenever compiler comes here, the loop will be terminated
//     } else{
//         console.log('Nhi Mila')
//     }
// }

// Reverse Loop
// for(let i = fruits.length - 1; i >= 0; i--){
//     console.log(i, fruits[i])
// }


// Nested Loop
const auditorium = [
    ['A', 'B', 'C', 'D', 'E', 'F'], // 0 index --> first row auditorium[0] -> ['A', 'B', 'C', 'D', 'E', 'F']
    ['A', 'B', 'C', 'D', 'E', 'F'], // 1 index --> second row auditorium[1] -> ['A', 'B', 'C', 'D', 'E', 'F']
    ['A', 'B', 'C', 'D', 'E', 'F']  // 2 index --> third row auditorium[2] -> ['A', 'B', 'C', 'D', 'E', 'F']
]
for(let i = 0; i < auditorium.length; i++){
    console.log("outer loop", i)
    for(let j = 0; j < auditorium[i].length; j++){
        console.log("inner loop", auditorium[i][j])
    }
}

