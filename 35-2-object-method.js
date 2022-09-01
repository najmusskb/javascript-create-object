// 35-2 Object method access and set property values


const student = {

    name: 'sakib',
    id: 173002057,
    money: 5000,
    subject: ['CSE', 'EEE', 'Textyle'],

    // ei function ekta method 

    Exam: function () {

        return this.name + ' is participateing in a Exam';
    },

    imrpoveExam: function (subject) {

        this.Exam();
        return `${this.name} is the taking improve exam on ${subject}`

    },

    treatDe: function (amount) {
        this.money = this.money - amount;
        return this.money;

    }
}


// method ke call korbo 
const output = student.Exam();
// console.log(output)



const reExam = student.imrpoveExam('aljebra')
// console.log(reExam)


const Remaining = student.treatDe(900);
console.log(Remaining)