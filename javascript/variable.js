// 1. Use strict(added in ES5)
// use this for Vanillna Javascript
'use strict'
console.log(a);    //var 변수 선언전에 호출해도 변수 Hoisting 되면서 undefine만 발생
// b = 5;          //let 변수 선언전에 값 할당 하면 error
// console.log(b); //let 변수 선언전에 호출 하면 error
// 2.Variable
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
console.log(`일주일은 ${daysInWeek}일 입니다`);
console.log("일주일은 " + daysInWeek+'일 입니다');
document.write("<p>일주일은" + daysInWeek +"일 입니다</p>");

// var (don't ever use this!)
// var hoisting (move declaration from to top)
// has no block scope

// 3.Constans
// Favor immutable data type always for a few reasons;
//  - security
//  - thread safety
//  - reduce human mistakes

// 4.Variable types
// primitive, sing item: number, string, boolean, null, undefined, symbol
// objet, box container
// function, fist-class function

const count = 17; // integer
const size = 17.1; // decimal number
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