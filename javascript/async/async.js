'use strict'

//const { reject } = require("async");

// async & await
// clear style of using promise :)

// 1. async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//     // do network request in 10 secs......
//     // return 'jin';
//     resolve ('jin resolve');
// });
// }
async function fetchUser() {
    // do network request in 10 secs......
    return 'jin async resolve';
    // resolve('jin async resolve');
}
const user = fetchUser();
user.then(console.log);
console.log(user);
// console.log(fetchUser());

// 2. await ✨
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    // throw reject('error jin');
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// function pickFruits(){
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }
// async function pickFruits(){
//     const apple = await getApple()
//     const banana = await getBanana()
//         return `${apple} + ${banana}`;
// };
// async function pickFruits(){
//     try{
//     const apple = await getApple()
//     const banana = await getBanana()
//         return `${apple} + ${banana}`;
//     } catch {
//         console.log('error Lee');
//     }
// };
async function pickFruits() {

        const applePromise = getApple();
        const bananaPromise = getBanana();
        const apple = await applePromise
        const banana = await bananaPromise
        return `${apple} + ${banana}`;
   
}
pickFruits().then(console.log);

// 3. useful APIs ✨
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); 
}
pickOnlyOne().then(console.log);

for(let step=0; step<=10; step++) {console.log(step);}