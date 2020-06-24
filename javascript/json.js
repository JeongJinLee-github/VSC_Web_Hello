// JSON
// JavaScript Object Notation
'use strict'
// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!!!`);
    },
    sex:'M'
};

json = JSON.stringify(rabbit);
console.log(json);
console.log(rabbit.symbol);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);
json = JSON.stringify(rabbit, (key, value) => {
    console.log(key === 'symbol' ? 'Symbol(id)' : `key: ${key}, value: ${value}`);
    return key === 'name' ? 'jin' : value;
    // return value ==='tor' ? 'jin' : value;
    // return key === 'name' && value ==='tori' ? 'jin' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(rabbit);
console.log(json);
// const obj = JSON.parse(json, (key, value) => {   // callback Function
//     console.log(`key: ${key}, value: ${value}`)
//     return key === 'birthDate' ? new Date() : value;
// });
const obj = JSON.parse(json, function (key, value) {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'birthDate' ? new Date() : value;
});
console.log(obj);
// obj.jump();
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());