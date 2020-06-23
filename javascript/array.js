'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2, 3];

// 2.Index position
const fruits = ['💋','😂','🙌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]);

// 3. Looping over an array
// print all fruits
// a.for
for (let i = 0; i <= 2; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits){
    console.log(fruit);
}
console.clear();
// c. for each    *** Using Call back function
// fruits.forEach(function (fruit, index, array) {
//     console.log(fruit, index, array);
// });
// fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓','🍅','🍆');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(poped);
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🥝','🍇','🍉');
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍒','🍌','🍍');
console.log(fruits);
fruits.splice(3,3);
console.log(fruits);
fruits.splice(1,1,'🍆','🌽');  // 임의의 위치에 alternate 대체
fruits.splice(3,0,'🍔','🌭');  // 임의의 위치에 삽입
console.log(fruits);

// combine two arrays
const flower = ['🌺','🌻','🌼'];
const newGifts = fruits.concat(flower);
console.log(newGifts);

// 5. Searching
// indexOf: find the index

console.log(fruits);
console.log(fruits.indexOf('🍓'));
console.log(fruits.indexOf('🍉'));

// includes
console.log(fruits.includes('🍒'));
console.log(fruits.includes('🍚'));
console.log(fruits.indexOf('🍚'));

// lastIndexOf
fruits.push('🍓');
console.log(fruits);
console.log(fruits.indexOf('🍓'));
console.log(fruits.lastIndexOf('🍓'));
