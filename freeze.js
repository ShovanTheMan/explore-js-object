const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
// [ 'color', 'price', 'isCleaned', 'capacity' ]
const values = Object.values(bottle);
// console.log(values);
// [ 'yellow', 50, true, 1 ]
const pair = Object.entries(bottle);
// console.log(pair);
//   [
//   [ 'color', 'yellow' ],
//   [ 'price', 50 ],
//   [ 'isCleaned', true ],
//   [ 'capacity', 1 ]
//   ]
console.log(bottle);
// seal korle data delete hobe na but update kora jabe
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;

console.log(bottle);