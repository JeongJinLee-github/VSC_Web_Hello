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

printWithDelay(() => console.log('async callback'),20);

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
                onError(new Error('not found'));
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
    error => {
        console.log(error);
    }
);