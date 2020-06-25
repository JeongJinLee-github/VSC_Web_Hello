'use strict'

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolveOK, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // const id = prompt('enter your id');
        const id ='robocap';
        if (id === 'robocap'){
            console.log('resolve processing');
            resolveOK('loging success!!');              //callBack function resolveOK()  
        } else {
            console.log('reject processing');   
            reject(new Error('no network!!'));          //callBack function reject()
        }
    }, 30);
});

// ASynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
function prtOut(outMsg) {
    console.log(outMsg);
}
printWithDelay(() => console.log('async callback after 40s'),40);   // ASynchronous callback
printWithDelay(prtOut('sync callback after 5000s'),5000);            // Synchronous
printWithDelay(() => console.log('async callback after 20s'),20);   // ASynchronous callback
printWithDelay(function prtOut2() {                                       // ASynchronous callback
        console.log('async callback after 25s');},25);
printWithDelay(prtOut('sync callback after 1000s'),1000);            // Synchronous

// 2. Consumers: then, catch, finally
promise 
.then(value => {
    console.log(`then Msg(${value})`);
})
.catch(error => {
    console.log(`catch Msg(${error})`);
})
.finally(() => {
    console.log(`finally Msg(${'finally message'})`);
})