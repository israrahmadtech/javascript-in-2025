//  Switch Statement: 

// Task:
// Monday to Sunday -> 7

// const day = 4
// switch(day){
//     case 1:
//         console.log("Today is Monday")
//         break;
//     case 2:
//         console.log("Today is Tuesday")
//         break;
//     case 3:
//         console.log("Today is Wednesday")
//         break;
//     case 4:
//         console.log("Today is Thursday")
//         break;
//     case 5:
//         console.log("Today is Friday")
//         break;
//     case 6:
//         cnsole.log("Today is Saturday")
//         break;
//     case 7:
//         console.log("Today is Sunday")
//         break;
//     default:
//         console.log('Please enter number 1-7')
// }


// espresso -> 1
// capuccino -> 2
// lette -> 3
// americano -> 4

const coffee = 'Lette'
switch(coffee){
    case 'espresso':
    case 'Espresso':
        console.log(coffee + " is available")
        break;
    case 'capuccino':
    case 'Capuccino':
        console.log(coffee + " is available")
        break;
    case 'lette':
    case 'Lette':
        console.log(coffee + " is available")
        break;
    case 'americano':
    case 'Americano':
        console.log(coffee + " is available")
        break;
    default:
        console.log(coffee + " is not available")
}
