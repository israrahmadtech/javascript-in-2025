
// PDF

var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. World War II Dolorem fuga similique laboriosam quia amet voluptate id hic accusamus et eligendi."
// for (let i = 0; i < text.length; i++){
//     if(text.slice(i, i + 12) === "World War II"){
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12)
//     }
// }
// console.log(text) // "World War II" is replaced by "the Second World War"

// if(text.includes(""))

var hey = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
// console.log(hey.length)

// for (let i = 0; i < text.length; i++){
//     if(text.slice(57, 57 + 12) === "World War II"){
//         text = text.slice(0, 57) + "the Second World War" + text.slice(57 + 12)
//     }
// }
// console.log(text)

// console.log(text.slice(0, 57))       // Lorem ipsum dolor sit amet consectetur adipisicing elit.
// console.log(text.slice(57, 57 + 12)) // World War II
// console.log(text.slice(57 + 12))     //  Dolorem fuga similique laboriosam quia amet voluptate id hic accusamus et eligendi.

let string = 'israr'
console.log(string.charAt(1)) // s


const cities = ['peshawar', 'islamabad', 'lahore', 'karachi']
const favCity = 'Lahore'
for (let i = 0; i < cities.length; i++){
    if(favCity.toLowerCase === cities[i]){
        console.log('City is already in the list')
    } else{
        console.log('It does not exist in the list')
    }
}

