// const first = {a : 4};
// const second = {a: 4};
// const third = second;

// if (third === second){
//     console.log('they are same');
// }
// else{
//     console.log('different');
// }

// dont use this method compare object or array


const first = {a : 4, b: 3, c: 2};
const second = {a: 4,  b: 3, c: 2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString); 

// if(firstString === secondString){
//     console.log('same')
// }
// else{
//     console.log('different')
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if (first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
   
}
const isSame = compareObject(first, second);
console.log(isSame);