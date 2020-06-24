// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Objects
'use strict'
// 1. Litterals and properties

// const name = 'Jin';
// const age = 54;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }

const obj1 = {};  //'object literal' syntax
const obj2 = new Object();  //'object constructor' syntax

function print(member8) {
    console.log(member8.name);
    console.log(member8.age);
}

const member8 = {name : 'jin', age : 54};
print(member8);

// with JavaScript magic (dynamically typed language)
// can add porperties later

member8.hasJob = true;          // imposable add another instance
console.log(member8.hasJob);

delete member8.hasJob;          // imposable delete somting instance
console.log(member8.hasJob);

member8['hasJob'] = true;
console.log(member8.hasJob);

delete member8.hasJob;          // imposable delete somting instance
console.log(member8.hasJob);

// 2. computed properties
console.log(member8.name);
console.log(member8['name']);
member8['hasJob'] = true;
console.log(member8.hasJob);

function printValue(obj, key) {
    // console.log(obj.key);    // no used .key >> must used [key]
    console.log(obj[key]);
}
printValue(member8,'name');
printValue(member8,'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age:20};
const person2 = {name: 'stev', age:30};
const person3 = {name: 'dave', age:40};
const person4 = makePerson('jin',54);
const person5 = new Person('mi',48);

// function makePerson(name, age) {
//     return {
//         name: name,
//         age: age
//     };
// }

function makePerson(name, age) {
    return {
        name,
        age
    };
}

// 4.Constructor function
function Person(name, age) {
    // this = {}
    this.name = name;
    this.age = age;
    // return this;
}

console.log(person3.name, person3.age);
console.log(person4.name, person4.age);
console.log(person5.name, person5.age);

// 5. in operator: property existence check (key in obj)
console.log('name' in member8);
console.log('sex' in member8);
console.log('age' in member8);
console.log(member8.sex);

// 6. for..in vs for..of
// for (key in object) {}
console.clear();
for (key in member8) {
    console.log(key);
}

// for (value of interable)
const array = [1, 2, 3, 4, 5];
// for (let i = 0; i <= 4; i++){
//     console.log(array[i]);
for (value of array) {    
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [boj1, obj2, obj3....])
const user = {name: 'jin', age:54};
console.log(user);
const user2 = user;
user2.name = 'Programmer';
console.log(user2);
console.log(user);

// old way

const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
user3.name = 'coder';
console.log(`user3.name: ${user3.name}`);
console.log(`user2.name: ${user2.name}`);
console.log(`user.name: ${user.name}`)

const user4 = {};
Object.assign(user4, user);
console.log(user4);
user4.name = 'lovelyMan';
console.log(user4);
console.log(user);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2, {color: 'black'});
console.log(mixed);
console.log(mixed.color);
console.log(mixed.size);