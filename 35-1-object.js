// 35-1 Module introduction Different way to Create Object
// sadharonoto Object e duita part thake------  property + method



// ---------------------------------------------------------------------

// now create a Object Using literals (vvi)
const player = {};
player.name = 'small Nirob';
player.specility = 'batsman';

// with function 
player.bat = function () {

    // console.log('this is sweet')
}
// console.log(player)
player.bat();





const student = {
    name: 'pande ',
    job: 'khay ande',
    ball: function () {
        console.log('throw the ball')
    },
    salary: 125454,


}






//01. object constractor

const person = new Object();
// console.log(person)



//02. object create method
const atel = Object.create(student);
// console.log(atel.name)



// 03.class  (vvi)
class Person {
    name = 'abul';
    address = 'dororghat';
    constructor(age) {

        this.age = age;

    }
}

const person1 = new Person(56);
console.log(person1)


// 04 function 

function Car(model, price) {
    this.model = model;
    this.price = price;

}
const tesla = new car('alon', 32);
console.log(tesla)