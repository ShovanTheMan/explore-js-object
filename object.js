// create object using object literals
const player = {};
player.name = 'small nirob';
player.specialty = 'batsman';
player.bat = function() {
    console.log('swing your bat');
}
// console.log(player);
// player.bat();


const student = {name: 'pandey',
job: 'khai andey',
ball: function(){
    console.log('throw the ball')
},
salary: 100000
}

// object constructor
// const person = new Object();
// console.log(person);

const atel = Object.create(student);
// console.log(atel.name);

// class
 class person{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
 }
 const person1 = new person(35);
 console.log(person1);