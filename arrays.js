// Array: Used to store multiple values of same or different datatypes

var fruits = ["cherry", "apple", "banana", "mango", "peach"]
//  arrayName   element
console.log(fruits[3])
console.log(fruits.length)
console.log(fruits[fruits.length - 1]) // getting last value

var length = fruits.length
console.log(fruits[length]) // undefined because there is no value on index 4
console.log(fruits[length - 1]) // Accessing last value

console.log(fruits[-1]) // undefined because there is no value on index -1

// Adding a value at last
fruits[5] = 'pineapple'

// Replacing a value
fruits[0] = 'grapes'
console.log(fruits[0]) // grapes

// Mixed array
var mixArray = ['israr', 497, true, false]
mixArray[10] = "Meri Value"
console.log(mixArray) // Output = [ 'israr', 497, true, false, <6 empty items>, 'Meri Value' ]

var sectionOne = ["ali", "israr "]
var sectionTwo = ["ahmad", "tech"]

var newArray = sectionOne + sectionTwo // 
console.log(newArray) // ali,israrahmad,tech    because converted into string

// Nested Array
newArray = [sectionOne, sectionTwo]
console.log(newArray) 
console.log(newArray[0]) // nested array on index 0
console.log(newArray[0][1]) // element on index 1 of nested array on index 0

// Concatinating array in an array
var concateArrays = sectionOne.concat(sectionTwo) // Adding sectionTwo into sectionOne
console.log(concateArrays)

var array = [1, 2, 3, 4, 5]
console.log(array.at(-2)) // 
// at()  can be used to access the values from oposite side


// join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
console.log(array.join('^')) // Separted the elements by ^ symbol and convert them into string

var fruit = ["Banana", "Orange", "Apple", "Mango"];

// The pop() method removes the last element from an array:
console.log(fruit.pop()) // return the removed element, also modifies the original array
console.log(fruit)
