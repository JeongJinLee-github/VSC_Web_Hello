// JSON
// JavaScript Object Notation

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
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);
// json = JSON.stringify(rabbit, (key, value) => {
//     console.log(`key: ${key}, value: ${value}`);
//     return key === 'name' ? 'jin' : value;
// });
// console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'birthDate' ? new Date() : value;
});
console.log(obj);
// obj.jump();
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);