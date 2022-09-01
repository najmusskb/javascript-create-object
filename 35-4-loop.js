// const numbers = [12, 25, 45, 78, 1, 48]

// for (const number of numbers) {
//     console.log(number)
// }


// for of loop cannt use object
// const bottol = { color: 'goldren', price: 50, isClean: true, capacity: 1 }
// const keys = Object.entries(bottol);
// for (const array of keys) {
//     for (const obj of array) {
//         console.log(obj)
//     }
// }



const numbers = [12, 25, 45, 78, 1, 48]
const bottol = { color: 'goldren', price: 50, isClean: true, capacity: 1 }





// vvi for in loop (jeita amra use korbo); (wow wow wow )

for (const key in bottol) {
    console.log(key, bottol[key])
}