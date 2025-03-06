// ...........  PASS BY REFERENCE   ..................

// 31 : Assign an array to another variable and modify the original array. Print both variables.
let numbers = [1, 2, 3, 4, 5]
let anotherNumbers = numbers

numbers[0] = 100
console.log(numbers)        // Output: [ 100, 2, 3, 4, 5 ]
console.log(anotherNumbers) // Output: [ 100, 2, 3, 4, 5 ]

// 32 : Create a function that adds an element to an array and check if the original array changes.
const myName = ['israr', 'ahmad', 'tech']
function addElement(){
    myName[2] = 'afridi'
    console.log(myName) // Output : [ 'israr', 'ahmad', 'afridi' ]
}
addElement(myName)
console.log(myName) // Output : [ 'israr', 'ahmad', 'afridi' ]


// 33 : Pass an array to a function, modify its first element, and print the modified array.
let array1 = [10, 20, 30, 40]
function modifyArray(array){
    array[2] = 300
}
modifyArray(array1)
console.log(array1) // Output : [ 10, 20, 300, 40 ]

// 34 : Create an array, pass it to another variable, modify the second variable, and print both.
let array2 = [1, 2, 3, 4, 5]
let anotherArray2 = array2

anotherArray2[1] = 200
console.log(array2)        // Output: [ 1, 200, 3, 4, 5 ]
console.log(anotherArray2) // Output: [ 1, 200, 3, 4, 5 ]

// 35 : Check if two variables referencing the same array are equal after modifying one.
const letters1 = ['A', 'B', 'C']
const letters2 = letters1
letters2[0] = 'a'
console.log(letters1) // Output : [ 'a', 'B', 'C' ]
console.log(letters2) // Output : [ 'a', 'B', 'C' ]
// Both modifies

// 36 : Create an array, pass it to a function that removes an element, and print the result.
const hello = ['h', 'e', 'l', 'l', 'o']
function removeElement(array){
    array.shift()
    console.log(array) // Output : [ 'e', 'l', 'l', 'o' ]
}
removeElement(hello)
console.log(hello)  // Output : [ 'e', 'l', 'l', 'o' ]


// 37 : Store an array in two different variables, modify one using push(), and print both.
const name1 = ['i', 's', 'r', 'a', 'r']
const name2 = name1
name1.push('israr')
console.log(name1) // Output : [ 'i', 's', 'r', 'a', 'r', 'israr' ]
console.log(name2) // Output : [ 'i', 's', 'r', 'a', 'r', 'israr' ]


// 38 : Use pop() on an array inside a function and see if the original array changes.
const abc = ['a', 'b', 'c']
function popIt(arrayABC){
    arrayABC.pop()
    console.log(arrayABC) // Output : [ 'a', 'b' ]
}
popIt(abc)
console.log(abc) // Output : [ 'a', 'b' ]


// 39 : Pass an array to a function that changes its length and check the effect.
const world = ['w', 'o', 'r', 'l', 'd']
console.log(world.length) // Output : 5
function lengthChanger(world){
    world.length = 10
    console.log(world.length) // Output : 10
    world[20] = 1000
    console.log(world.length) // Output : 21
}
lengthChanger(world)
console.log(world) // [ 'w', 'o', 'r', 'l', 'd', <15 empty items>, 1000 ]

// 40 : Create two separate arrays with identical elements and check if they are strictly equal.
const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3, 4, 5]
console.log(a == b)  // false
console.log(a === b) // false
