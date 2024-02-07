const kodomAli = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculas', 'algebra','geometry'],
    exam: function(){
        return this.name + 'is participate in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;

    }
}

const result = kodomAli.exam();
// console.log(result);

const badam = {
    name: 'kacha badam',
    money: 8000
}
const result2 = kodomAli.exam.call(badam);
// console.log(result2);
// method 1 using call--using comma
const badamMoney = kodomAli.treatDey.call(badam, 400, 100);
 console.log(badamMoney);
//  method 2 using apply -- using array
const badamMoney2 = kodomAli.treatDey.apply(badam, [1000, 100]);
console.log(badamMoney2);
// method 3 using bind creating a function and convert
const badamTreat = kodomAli.treatDey.bind(badam);
const remaining = badamTreat(1000, 100);
console.log(remaining);