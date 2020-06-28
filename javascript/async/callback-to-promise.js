'use strict'
// Callback Hell to promise exchange example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'jin' && password === 'dream') ||
                    (id === 'programmer' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(`'not found id(${id}) or miss match password(${password})'`);
                }
            }, 2000);
        })

    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'jin') {
                    resolve({ name: 'jin', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

for(let step=0; step<=10; step++) {console.log(step);}