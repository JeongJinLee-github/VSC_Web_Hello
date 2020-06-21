"use strict"
// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

console.log("jeongjin's \n\tbook"); // '' "" 구분, \특수제어 문자

// 2. Numeric operators
console.log(1 + 1);  // add
console.log(1 - 1);  // substract
console.log(1 * 1);  // divide
console.log(1 / 1);  // multiply
console.log(1 % 1);  // remainder
console.log(1 ** 1);  // exponentiation

// 3. Increment and declrement operators

let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
{
    let x = 3;
    let y = 6;
    x += y; // x = x + y;
    x -= y; // x = x - y;
    x *= y; // x = x * y;
    x /= y; // x = x / y;
}
// 5. Comparison operators
console.log(10 < 6);  // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`)

// && (and)
console.log(`and: ${value1 && value2 && check()}`)

// often used to compress long if-statment
// nullableObject && nullableObject.someting
// if (nullableObjet != null) {
//     nullableObjet.something;
//}

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('Q');
    }
    return true;
    }

// ! (not)
console.log(value1); 
console.log(!value1);   

// 7. Equality
const stringFive = '5';
const numerFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numerFive);
console.log(stringFive != numerFive);

// == strict equality, no type conversion
console.log(stringFive === numerFive);
console.log(stringFive !== numerFive);

// objet equality by reference
const member1 = {name: 'jeongjin'};
const member2 = {name: 'jeongjin'};
const member3 = member1;
console.log(member1 == member2);
console.log(member1 === member2);
console.log(member1 === member3);

// equality = puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'JeongJin';
if(name === 'JeongJin'){
    console.log('Welcome !!, Jeongjin');
} else if (name ==='coder'){
    console.log('You are amazing coder'); 
} else{
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1: value2;
console.log(name === 'JeongJin' ? 'yes':'no');

// 10. Switch statement
// use for multiple if checks
// use for emun-likle value chech
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('like you!');
        break;
    default:
        console.log('small all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`)
    i--;
}while (i > 0)

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i--){
    // inline variable declaration
    console.log(`inlinw variable for: ${i}`);
}

// nested loops
for (let i = 0; i <= 10; i++){
    for (let j = 0; j <= 10; j++){
        console.log(`for i: ${i}  for j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i=0; i <= 10; i++){
    if (i%2 != 0){
        continue
    }
    console.log(`for: ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i=0; i <= 10; i++){
    if (i > 8){
        break;
    }
    console.log(`for: ${i}`);
}

// label goto:
// Don't used must be allways

again1: 
{
    console.log(`Have good luck !!!`);
    let k = 0;
    again2:  
    while(k < 10){
        k++;
        if (k <= 5){
            continue again2;
            }
        console.log(`lable no: ${k}`);            
    }
    if (k < 7){
        break again1;
    }
    console.log(`lable no k : ${k}`);
}