
// ......   Basic Array Manipulation   .................

// 01 : Create an array with five fruit names and print the second element.
var fruits = ['mango', 'orange', 'apple', 'cherry', 'kabop']
console.log(fruits[1]) // Ouput: orange

// 02 : Replace the third element of an array with "Mango" and print the updated array.
fruits[2] = 'Mango'
console.log(fruits) // Output: [ 'mango', 'orange', 'Mango', 'cherry', 'kabop' ]

// 03 : Create an empty array and add three colors to it using push(). Print the array.
const colors = []
colors.push('green', 'red', 'blue')
console.log(colors) // Output: [ 'green', 'red', 'blue' ]

// 04 : Remove the last element of an array using pop() and print the removed element.
const removedElement = colors.pop(colors.length-1)
console.log(removedElement) // Output: blue
console.log(colors) // Output: [ 'green', 'red' ]

// 05 : Add two numbers at the beginning of an array using unshift() and print the array.
colors.unshift(10, 20)
console.log(colors) // Output: [ 10, 20, 'green', 'red' ]

// 06 : Remove the first element of an array using shift() and print the updated array.
colors.shift(0)
console.log(colors) // Output: [ 20, 'green', 'red' ]

// 07 : Print the length of an array containing four elements.
const nums = [1, 2, 3, 4]
console.log(nums.length) // Output: 4

// 08 : Extract the last two elements from an array using slice() and print them.
const slicedPart = nums.slice(nums.length-2, nums.length+1)
console.log(slicedPart)

// 09 : Extract the middle element(s) of an array with an even number of elements using slice().
const numbers = [1, 2, 3, 4, 5, 6]
const middleElements = numbers.slice(numbers.length / 2 - 1, numbers.length / 2 + 1)
console.log(middleElements) // Ouptut: [ 3, 4 ]
// numbers.length / 2 ==> 6 / 2 ==> 3
// 3 - 1  ==> 2
// 3 + 1 ==> 4

// 10 : Replace two middle elements in an array using splice() and print the updated array.
numbers.splice(numbers.length / 2 -1, 2)
console.log(numbers) // Output: [ 1, 2, 5, 6]
