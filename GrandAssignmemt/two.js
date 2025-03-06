// .......      PUSH , POP , SHIFT , UNSHIFT   ...............

// 11 : Create an array of three cities and add a new city at the end using push().
const cities = ['peshawar', 'swat', 'kohat']
cities.push('naran')
console.log(cities)  // Output: [ 'peshawar', 'swat', 'kohat', 'naran' ]

// 12 : Remove the last city from an array using pop() and print the updated array.
cities.pop()
console.log(cities) // Output: [ 'peshawar', 'swat', 'kohat' ]

// 13 : Add two new colors to the beginning of an array using unshift() and print the array.
const colors = ['pink', 'black', 'white']
colors.unshift('yellow', 'orange')
console.log(colors) // Output: [ 'yellow', 'orange', 'pink', 'black', 'white' ]

// 14 : Remove the first color from an array using shift() and print the removed color.
const removedColor = colors.shift()
console.log(removedColor) // Output: yellow

// 15 : Use push() twice to add two new names to an array and print the array.
const names = ['israr', 'ahmad', 'tech']
names.push('khan')
names.push('afridi')
console.log(names) // Output: [ 'israr', 'ahmad', 'tech', 'khan', 'afridi' ]

// 16 : Use pop() on an array of five elements and check if the length is now four.
console.log(names.length) // Output: 5
names.pop()
console.log(names.length) // Output: 4

// 17 : Use shift() on an array with three elements and print the updated array.
const array1 = [1, 2, 3]
array1.shift()
console.log(array1) // Output: [ 2, 3 ]

// 18 : Use unshift() to add a new number at the beginning of an array and print it.
array1.unshift(10)
console.log(array1) // Output: [ 10, 2, 3 ]

// 19 : Create an array of three numbers, remove the last one using pop(), and print the remaining array.
const nums = [1, 2, 3]
nums.pop()
console.log(nums) // Output: [ 1, 2 ]

// 20 : Create an array with three elements, remove the first using shift(), and print the updated array.
const nums2 = [10, 20, 30]
nums2.shift()
console.log(nums2) // Output : [ 20, 30 ]
