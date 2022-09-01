// find keys in a object 

const bottol = { color: 'goldren', price: 50, isClean: true, capacity: 1 }


const keys = Object.keys(bottol);
// console.log(keys)

// find values
const values = Object.values(bottol)
// console.log(values)


// find keys and value

const finadKeysAndValue = Object.entries(bottol)
// console.log(finadKeysAndValue)
// array er vitor array thakle seita 2 dymantion 




// HOW TO DELETE OJECT PROPERTY 
// console.log(bottol)
// delete bottol.isClean;
// console.log(bottol)

// seal kore dile delete kora jay na jemon 
// seal
// console.log(bottol)
// Object.seal(bottol)
// delete bottol.isClean;
// console.log(bottol)


// frizze
console.log(bottol)
Object.freeze(bottol)
bottol.price = 100;
delete bottol.isClean;
console.log(bottol)