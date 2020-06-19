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

// 9, Ternary operator: ?
// condition ? value1: value2;
console.log(name === 'JeongJin' ? 'yes':'no');