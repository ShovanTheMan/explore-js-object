const numbers = [12, 54, 65, 3, 54];
// for (const number of numbers){
//     console.log(number);
// }

// 1.for of can not be used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
for (const key of keys){
    // console.log(key);
}
// 3 ways to read object properties
// bottle.color
// bottle['color']
// bottle[key]

for(const key of keys){
    // console.log(key, bottle[key]);
    // color yellow
    // price 50
    // isCleaned truer
    // capacity 1

}

//for in loop--used for long time
for(const key in bottle){
    // console.log(key, bottle[key]);
}
// advanced
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)
    ){
console.log(key, value);
}
