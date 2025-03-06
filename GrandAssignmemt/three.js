// ...........  SLICE and SPLICE  ...............

// 21 : Extract the first three elements from an array using slice() and print them.
const nums = [1, 2, 3, 4, 5, 6]
const slicedElements = nums.slice(0, 3)
console.log(slicedElements) // Output : [ 1, 2, 3 ]

// 22 : Extract elements from index 2 to 4 using slice() and print them.
const slice1 = nums.slice(2, 4)
console.log(slice1) // Output: [ 3, 4 ]

// 23 : Remove two elements from an array starting from index 1 using splice().
nums.splice(1, 2)
console.log(nums) // Output: [ 1, 4, 5, 6 ]

// 24 : Insert "Lemon" and "Orange" at index 2 in an array using splice() and print the updated array.
const fruits = ['mango', 'orange', 'apple']
fruits.splice(2, 0, 'Lemon', 'Orange')
console.log(fruits)  // Output: [ 'mango', 'orange', 'Lemon', 'Orange', 'apple' ]

// 25 : Remove the last two elements using splice() and print the modified array.
fruits.splice(fruits.length - 2, 2)
console.log(fruits) // Output : [ 'mango', 'orange', 'Lemon' ]

// 26 : Use splice() to add three new numbers at the beginning of an array and print the array.
const numbers = [1, 2, 3]
numbers.splice(0, 0, 100, 200, 300)
console.log(numbers) // Output: [ 100, 200, 300, 1, 2, 3 ]

// 27 : Create an array with six elements, extract the last four using slice(), and print them.
const num2 = [10, 20, 30, 40, 50, 60]
// const slicedElements2 = num2.slice(num2.length - 4)
const slicedElements2 = num2.slice(2)
console.log(slicedElements2) // Output: [ 30, 40, 50, 60 ]

// 28 : Use slice() on an array and check if the original array remains unchanged.
const num3 = [1, 2, 3, 4, 5]
num3.slice(2, 5)
console.log(num3) // Output: [ 1, 2, 3, 4, 5 ]
// Original array remains the same(not changed, not modified)

// 29 : Use splice() to remove one element from the middle of an array and print the updated array.
num3.splice(num3.length / 2, 1)
console.log(num3) // [ 1, 2, 4, 5 ]  : 3 is removed which is the middle element

// 30 : Use splice() to replace two elements in an array and print the modified array.
num3.splice(1, 2, 20, 40)
console.log(num3) // Output : [ 1, 20, 40, 5 ]  Two elements are replaced
