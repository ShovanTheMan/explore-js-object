const student = {
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
const output = student.exam();
// console.log(output)
const reExam = student.improveExam('English');
// console.log(reExam);
const remaining = student.treatDey(900, 100);
console.log(remaining);