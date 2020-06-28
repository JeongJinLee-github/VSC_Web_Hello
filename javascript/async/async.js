'use strict'

//const { reject } = require("async");

// async & await
// clear style of using promise :)

// 1. async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//     // do network request in 10 secs......
//     //return 'jin';
//     resolve ('jin');
// });
// }
async function fetchUser() {
    // do network request in 10 secs......
    return 'jin';
}
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    throw reject('error jin');
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
async function pickFruits(){
    try{
    const apple = await getApple()
    const banana = await getBanana()
        return `${apple} + ${banana}`;
    } catch {
        console.log('error Lee');
    }
};
// async function pickFruits() {

//         const applePromise = getApple();
//         const bananaPromise = getBanana();
//         const apple = await getApple()
//         const banana = await getBanana()
//         return `${apple} + ${banana}`;
   
// }
for(let step=0; step<=10; step++) {console.log(step);}
pickFruits().then(console.log);