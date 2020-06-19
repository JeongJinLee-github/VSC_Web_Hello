// 1. Use strict(added in ES5)
// use this for Vanillna Javascript
'use strict'
console.log(a);    //var 변수 선언전에 호출해도 변수 Hoisting 되면서 undefine만 발생
// b = 5;          //let 변수 선언전에 값 할당 하면 error
// console.log(b); //let 변수 선언전에 호출 하면 error
// 2.Variable,       rw(read/write) 
// let (added in ES6)
var a;
a=100;
console.log(a);
let b;
b=1000;
console.log(b);
const daysInWeek = 7;
console.log("일주일은" + daysInWeek);
{
    let localval = 50;
    console.log('localval=' + localval);
    var localvar =500;
    console.log('localval=' + localvar);
}
//console.log('localval=' + localval);
console.log('localvar=' + localvar);
console.log(`일주일은 ${daysInWeek} 일 입니다`);
console.log("일주일은 " + daysInWeek+ ' 일 입니다');
document.write("<p>일주일은 " + daysInWeek +"일 입니다</p>");
document.write(`<p>일주일은 ${daysInWeek} 일 입니다</p>`);

// var (don't ever use this!)
// var hoisting (move declaration from to top)
// has no block scope

// 3.Constan,   r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const count = 17; // integer
const size = 17.1; // decimal number

// Note!
// immutable data types: premitive types, frozen objects (i.e. object.freeze())]
// mutable date types: all objects by default are mutable in JS
// Favor immutable data type always for a few reasons;
//  - security
//  - thread safety
//  - reduce human mistakes

// 4.Variable types
// primitive, sing item: number, string, boolean, null, undefined, symbol
// objet, box container
// function, fist-class function

console.log(`value: ${count}, type:${typeof count}`);
console.log('value: ' + count + ', ' + 'type:'+ typeof count);
console.log(`value: ${size}, type:${typeof size}`);
console.log('value: '+ size + ', ' + 'type:' + typeof size);

// number - special numeric values: infinity, -infinity NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2^53) ~ (2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
console.log('value: ' + bigInt + ', ' + 'type: ' + typeof bigInt);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello '+ brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// greeting = greeting + ' 안녕하세요'; // Uncaught TypeError :Assignment to constant variable.
console.log(`value: ${greeting}, type: ${typeof greeting}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1;   // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
let y = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   // false

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);  // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const member = { name:'JeongJin', familyName:'Lee', age: 55};
console.log(member.name);
console.log(member.age);
member.name ='jeongmi'
member.age = 47;
console.log(member.name);
console.log(member.age);

// 5. Dynamic typing: dynamically typed language
let text ='hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/ '2';
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/ 2;
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); //h 윗행에서 자동형변환 으로 인한 TypeError


