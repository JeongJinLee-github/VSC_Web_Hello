'use strict'

// JavaScript is synchronous.
// Execute the code block by orger after hoistiong.
// hoistiong: var, function declartion
console.log('1');
// setTimeout(function() {
//     console.log('2');}, 1000);
setTimeout(() => {                      //arrow function, callback function
    console.log(2);}, 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
// printImmediately(function() { console.log('hello')});
printImmediately(() => console.log('hello'));

// ASynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
function prtOut(outMsg) {
    console.log(outMsg);
}
function prtOutAlert(outMsg) {
    alert(outMsg);
}

printWithDelay(() => console.log('async callback after 40s'),40);   // ASynchronous callback
printWithDelay(prtOut('sync callback after 50s'),50);                  // Synchronous
printWithDelay(() => console.log('async callback after 20s'),20);   // ASynchronous callback
printWithDelay(prtOut('sync callback after 30s'),30);                  // Synchronous
printWithDelay(function prtOut2() {                                       // ASynchronous callback
        console.log('async callback after 25s');},25);

printWithDelay(() => alert('async callback after 40s'),40);            // ASynchronous callback
printWithDelay(prtOutAlert('sync callback after 50s'),50);                 // Synchronous
printWithDelay(() => alert('async callback after 20s'),20);            // ASynchronous callback
printWithDelay(prtOutAlert('sync callback after 30s'),30);                 // Synchronous
printWithDelay(function prtOut2() {                                       // ASynchronous callback
        alert('async callback after 25s');},25);


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'jin' && password === 'dream') || 
                (id === 'programmer' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(`'not found id(${id}) or miss match password(${password})'`);
            }
        }, 1000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'jin') {
                onSuccess({ name: 'jin', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    errorMsg => {
        console.log(new Error(`Error Message >> ${errorMsg}`));
    }
);
for(let step=0; step<=10; step++) {console.log(step);}