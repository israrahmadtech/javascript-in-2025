// Array: Used to store multiple values of same or different datatypes

var fruits = ["cherry", "apple", "banana", "mango", "peach"]
//  arrayName   element
// console.log(fruits[3])
// console.log(fruits.length)
// console.log(fruits[fruits.length - 1]) // getting last value

var length = fruits.length
// console.log(fruits[length]) // undefined because there is no value on index 4
// console.log(fruits[length - 1]) // Accessing last value

// console.log(fruits[-1]) // undefined because there is no value on index -1

// Adding a value at last
fruits[5] = 'pineapple'

// Replacing a value
fruits[0] = 'grapes'
// console.log(fruits[0]) // grapes

// Mixed array
var mixArray = ['israr', 497, true, false]
mixArray[10] = "Meri Value"
// console.log(mixArray) // Output = [ 'israr', 497, true, false, <6 empty items>, 'Meri Value' ]

var sectionOne = ["ali", "israr "]
var sectionTwo = ["ahmad", "tech"]

var newArray = sectionOne + sectionTwo // 
// console.log(newArray) // ali,israrahmad,tech    because converted into string

// Nested Array
newArray = [sectionOne, sectionTwo]
// console.log(newArray) 
// console.log(newArray[0]) // nested array on index 0
// console.log(newArray[0][1]) // element on index 1 of nested array on index 0

// Concatinating array in an array
var concateArrays = sectionOne.concat(sectionTwo) // Adding sectionTwo into sectionOne
// console.log(concateArrays)

var array = [1, 2, 3, 4, 5]
// console.log(array.at(-2)) // 
// at()  can be used to access the values from oposite side


// join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
// console.log(array.join('^')) // Separted the elements by ^ symbol and convert them into string

var fruit = ["Banana", "Orange", "Apple", "Mango"];

// The pop() method removes the last element from an array:
// console.log(fruit.pop()) // return the removed element, also modifies the original array
// console.log(fruit)

// ............   Array's Methods  ................

// push , pop , shift , unshift , slice , splice , indexOf

var fruits = ['apple', 'date', 'banana']

// push(): Appends/adds new elements to the end of an array, and returns the new length of the array.
fruits.push('orange')
console.log(fruits)
fruits.push("orange", "kabop")
console.log(fruits)

// pop(): Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
fruits.pop()
console.log(fruits)
var hey = []
// console.log(hey.pop()) // undefined

// shift(): Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
fruits.shift()
console.log(fruits)

// unshift: Inserts new elements at the start of an array, and returns the new length of the array.
fruits.unshift("apple")
console.log(fruits)

// slice: The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
var slicing = fruits.slice(2, 5) // values from index 2 to 5-1 will be included/added to slicing variable, 5 will be excluded/not include
console.log(slicing)
var slice = fruits.slice(4, 2)
console.log(slice) // return empty array

var slice2 = fruits.slice(3) // values from index 3 upto last/end of array will be included
var slice3 = fruits.slice(3, -2)

// splice: The zero-based location in the array from which to start removing elements.
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
var splicing = fruits.splice(2, 5, 'cherry', 'kiwi', 'ndnj')
console.log(splicing)

var cities = ['peshawar', 'mardan', 'char sadda', 'swat', 'noshera', 'kohat', 'mansehra', 'abbotabad']

cities.splice(2, 0, 'karak') // add karak after index 2, 0 for don't remove any value
console.log(cities)

cities.splice(4, 2)
console.log(cities)
// splice return removed values

// splice(startFrom, CountOfValuesToBeRemoved, valueToBeAdded after startFrom)

// indexOf: Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(cities.indexOf('kohat'))

var anotherCities = ['batagram', 'naran', 'kaghan']

// var combinedCities = cities.concat(anotherCities)
// console.log(combinedCities)

anotherCities = cities  // pass by reference
// anotherCities[0] = 'haripur'
// console.log(cities)
// console.log(anotherCities)

function changeCity(array){
    array[0] = 'parachinar'
}
changeCity(cities)
console.log(cities)
console.log(anotherCities)


// Deep copy of an array: This refers to creating a new array where all elements of the original array are copied, including nested arrays or objects (if they exist). This ensures that changes to the new array do not affect the original array.