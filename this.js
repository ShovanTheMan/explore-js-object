// console.log(this);
const kodomAli = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculas', 'algebra','geometry'],
    exam: function(){
        return this.name + 'is participate in an exam';
    },
    examArrow: () => {
        console.log(this);
    };
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
    }
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;

    }
}
kodomAli.exam();


badamAli.exam = kodomAli.exam;
badamAli.exam();
